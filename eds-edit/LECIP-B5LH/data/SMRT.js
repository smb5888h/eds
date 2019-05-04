let __paintInterval__ = 0;
let __scrollInterval__ = 0;

EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 7
            },
            text: "$serviceNumber",
            font: "Arial-20",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: "width(serviceNumber) + len(7)"
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 14,
                right: "width(serviceNumber) + len(7)"
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },

    pids: {
        __dynamic__: (matrix, data) => {
            let hold = false;
            function paint() {
                if (hold) return;

                matrix.clearRectangle(0, 0, matrix.width, matrix.height);

                matrixPrimitives.setStrokeColour(0x84e76e);
                matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                let font = "LECIP-PIDS-13:7";
                let textWidth;
                try {textWidth = matrix.measureText(data.serviceNumber, font, 1).width;} catch (e) {textWidth = Infinity;}
                if (textWidth >= 32) {
                    font = "LECIP-PIDS-13:5";
                    textWidth = matrix.measureText(data.serviceNumber, font, 1).width;
                }

                let textPosition = Math.round(32 / 2 - textWidth / 2);

                matrix.drawText(data.serviceNumber, font, 1, textPosition, 1, 0xffffff);

                function drawNextStop() {
                    let bottomRowNum = scrollNum % 3;

                    if (bottomRowNum == 0)
                        matrix.drawText("NEXT>>", "LECIP-PIDS-13:5", 1, 1, 17, 0xffffff);
                    else if (bottomRowNum == 1)
                        matrix.drawText("STOP>>", "LECIP-PIDS-13:5", 1, 1, 17, 0xe35f57);
                    else if (bottomRowNum == 2)
                        matrix.drawText("Arr>>", "LECIP-PIDS-13:5", 2, 4, 17, 0xeae44a);
                }

                let {destination} = data;
                let currentScroll = Math.floor(scrollNum / 3);

                if (data.secondDestination) {
                    if (currentScroll > data.secondDestination.changeIndex)
                        destination = data.secondDestination.name;
                }
                matrix.drawText(destination, "LECIP-PIDS-13:5", 1, 33, 1, 0xffffff);

                // Possibly make scrolls query TSG site? Not great for offline use tho
                let measure = matrix.measureText(data.scrolls[currentScroll], "LECIP-PIDS-13:5", 1);
                let scrollWidth = measure.width,
                    scrollHeight = measure.height;

                if (scrollWidth === 0) return;
                drawNextStop();

                if (scrollWidth > matrix.width - 34) { // scrolling text
                    hold = true;

                    let frameCount = scrollWidth + matrix.width - 32;
                    let timeBetweenFrames = 100;

                    let frameNum = 0;
                    __scrollInterval__ = setInterval(() => {
                        if (frameNum == frameCount) {
                            clearInterval(__scrollInterval__);
                            hold = false;
                            return;
                        }
                        matrix.clearRectangle(0, 17 + (13 - scrollHeight), matrix.width, 17 + scrollHeight);

                        matrix.drawText(data.scrolls[currentScroll], "LECIP-PIDS-13:5", 1, matrix.width - frameNum, 17, 0xffffff);
                        matrix.clearRectangle(0, 17 + (13 - scrollHeight), 33, 17 + scrollHeight);
                        drawNextStop();

                        matrixPrimitives.setStrokeColour(0x84e76e);
                        matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                        frameNum++;
                    }, timeBetweenFrames);
                } else
                    matrix.drawText(data.scrolls[currentScroll], "LECIP-PIDS-13:5", 1, 33, 17, 0xffffff);

                scrollNum++;
                if (scrollNum >= data.scrolls.length * 3)
                    scrollNum = 0;
            }

            let scrollNum = 0;
            clearInterval(__paintInterval__);
            clearInterval(__scrollInterval__);

            __paintInterval__ = setInterval(paint, 1000);

            paint();
        }
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
}

EDSData.SMRT = {
    1: {
        1: {
            front: {
                renderType: "message",
                text: "CHARTERED",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "CHARTERED",
                scrolls: [""]
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: "message",
                text: "ANG MO KIO DEPOT",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ANG MO KIO DEPOT",
                scrolls: [""]
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: "message",
                text: "KRANJI DEPOT",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "KRANJI DEPOT",
                scrolls: [""]
            }
        }
    },
    4: {
        1: {
            front: {
                renderType: "message",
                text: "SMRT BUSES",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "SMRT BUSES",
                scrolls: [""]
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OFF SERVICE",
                scrolls: [""]
            }
        }
    },
    6: {
        1: {
            front: {
                renderType: "message",
                text: "WOODLANDS DEPOT",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "WOODLANDS DEPOT",
                scrolls: [""]
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "message",
                text: "OUT OF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OUT OF SERVICE",
                scrolls: [""]
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OFF SERVICE",
                scrolls: [""]
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: "message",
                text: "ON DRIVING TEST",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ON DRIVING TEST",
                scrolls: [""]
            }
        }
    },
    10: {
        1: {
            front: {
                renderType: "message",
                text: "FERRY SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "FERRY SERVICE",
                scrolls: [""]
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: "message",
                text: "MRT SHUTTLE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "MRT SHUTTLE",
                scrolls: [""]
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "TRAINING BUS",
                scrolls: [""]
            }
        }
    },
    117: {
        1: {
            front: {
                renderType: "logo",
                text: "SMRT BUSES",
                image: "logo"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "SMRT",
                destination: "SMRT BUSES",
                scrolls: [""]
            }
        }
    },
    7202: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "72B",
                destination: {
                    text: "ENDS AT",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "ITE COLLEGE WEST"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "72",
                destination: "AMK AVE 5",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
    },
    93: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: {
                    text: "93",
                    font: "LECIP-24"
                },
                destination: {
                    text: "HARBOURFRONT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "EUNOS LINK"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "93",
                destination: "HARBOURFRONT INT",
                scrolls: [
                    "EUNOS INT",
                    "EUNOS STN/ INT",
                    "EUNOS STN",
                    "BLK 17",
                    "BLK 322",
                    "BLK 311",
                    "OPP EUNOS TECHNOLINK",
                    "COMFORT DRIVING CTR",
                    "COMFORT TEST CTR",
                    "OPP BLK 1022",
                    "AFT TAI SENG STN",
                    "ASIAWIDE IND BLDG",
                    "AFT PAYA LEBAR ST",
                    "AFT UPP PAYA LEBAR RD",
                    "BARTLEY STN EXIT A",
                    "OPP BARTLEY CHR CH",
                    "OPP GAMBIR RIDGE",
                    "BEF UPP SERANGOON RD",
                    "S'PORE POWER TRG INST",
                    "PUB RECREATION CLUB",
                    "BEF BRADDELL FLYOVER",
                    "COMFORTDELGRO CORP LTD",
                    "BLK 219",
                    "AFT MUHAJIRIN MQUE",
                    "BLK 1004",
                    "AFT BISHAN RD",
                    "BRADDELL VIEW",
                    "OPP MACRITCHIE RESERVOIR",
                    "BEF ANDREW RD",
                    "BEF KHEAM HOCK RD",
                    "AFT THE JAPANESE ASSN",
                    "OPP S'PORE BIBLE COLL",
                    "OPP LUTHERAN TWRS",
                    "OPP ST. MARGARET'S SEC SCH",
                    "FARRER RD STN EXIT A",
                    "SPANISH VILLAGE",
                    "OPP TULIP GDN",
                    "OPP HOLLAND HILL LODGE",
                    "OPP BLK 95",
                    "QUEENSWAY SEC SCH",
                    "QUEENSTOWN POLYCLINIC",
                    "OPP BLESSED SACRAMENT CH",
                    "BLK 19",
                    "BLK 166",
                    "OPP QUEENSWAY SHOP CTR",
                    "BEF TELOK BLANGAH HILL PK",
                    "OPP ALEXANDRA PT",
                    "BEF PSA BLDG",
                    "AFT ALEXANDRA RD",
                    "YEO'S BLDG",
                    "OPP TELOK BLANGAH STN",
                    "BEF CHR COMMUNITY CHAPEL",
                    "BEF SEAH IM RD",
                    "HARBOURFRONT INT"
                ]
            }
        },
    },
    217: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913E",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    "WDL INT / MRT"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "913E",
                destination: "WOODLANDS CIRCLE",
                secondDestination: {
                    name: "WOODLANDS CENTRE RD",
                    changeIndex: 10
                },
                scrolls: [
                    "WOODLANDS TEMP INT",
                    "BLK 825",
                    "BLK 853",
                    "BLK 706",
                    "OPP ADMIRALTY STN",
                    "BEF ADMIRALTY PRI SCH",
                    "BLK 722",
                    "BLK 726",
                    "BLK 713",
                    "BLK 747A CP",
                    "OPP BLK 739A CP",
                    "BLK 786A CP",
                    "OPP ADMIRALTY PRI SCH",
                    "ADMIRALTY STN",
                    "BLK 666",
                    "AFT 888 PLAZA",
                    "BLK 891C CP",
                    "WOODLANDS TEMP INT",
                    "BLK 106",
                    "BLK 120",
                    "OPP BLK 12",
                    "BLK 137",
                    "BEF W'LANDS CTR RD",
                    "MARSILING PK",
                    "W'LANDS TRAIN CHECKPOINT",
                    "OPP BLK 1A",
                    "OPP MARSILING PK",
                    "AFT W'LANDS CTR RD",
                    "OPP BLK 137",
                    "BLK 12",
                    "OPP BLK 120",
                    "OPP BLK 106",
                    "WOODLANDS TEMP INT"
                ]
            }
        }
    },
    6701: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "TAMPINES via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "UPP BT TIMAH RD",
                    "DUNEARN RD",
                    "SERANGOON RD",
                    "SIMS AVE",
                    "NEW UPP CHANGI RD",
                    "BEDOK NTH AVE 3"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67",
                destination: "TAMPINES INT",
                scrolls: [
                    "CHOA CHU KANG INT",
                    "BLK 352",
                    "BLK 224",
                    "BLK 239",
                    "BLK 113",
                    "BLK 26",
                    "PHOENIX STN",
                    "BT PANJANG STN EXIT A/LRT",
                    "THE LINEAR",
                    "BEF HAZEL PK TERR",
                    "CASHEW STN",
                    "ASSUMPTION PATHWAY SCH",
                    "AFT ASSUMPTION ENG SCH",
                    "HILLVIEW STN EXIT A",
                    "THE RAIL MALL",
                    "OPP HUME PK CONDO",
                    "OPP THE HILLSIDE",
                    "AFT BT TIMAH FIRE STN",
                    "SOUTHAVEN II",
                    "OPP BEAUTY WORLD CTR",
                    "OPP BT TIMAH PLAZA",
                    "OPP KING ALBERT PK STN",
                    "HUA GUAN GDNS",
                    "OPP THE NEXUS",
                    "AFT SWISS CLUB RD",
                    "OPP SIXTH AVE STN",
                    "AFT JLN NAGA SARI",
                    "NATL JC",
                    "OPP TAN KAH KEE STN",
                    "OPP CORONATION PLAZA",
                    "OPP BOTANIC GDNS STN",
                    "AFT KHEAM HOCK RD",
                    "AFT DUNKIRK AVE",
                    "OPP STEVENS STN",
                    "SCGS PR",
                    "BEF GOLDHILL AVE",
                    "ANGLO-CHINESE SCH",
                    "CHANCERY CT",
                    "OPP NEWTON STN EXIT C",
                    "OPP NEWTON FC",
                    "AFT MAKEPEACE RD",
                    // "KK WOMEN & CHILD HOSP",
                    "LITTLE INDIA STN",
                    "TEKKA CTR",
                    "BROADWAY HOTEL",
                    "AFT FARRER PK STN EXIT G",
                    "AFT KEMPAS RD",
                    "OPP ARC 380",
                    "AFT KALLANG BAHRU",
                    "BEF KALLANG RD",
                    "AFT PADANG JERINGAU",
                    "KALLANG STN",
                    "AFT LOR 1 GEYLANG",
                    "YI XIU FTY BLDG",
                    "BEF LOR 23 GEYLANG",
                    "AFT ALJUNIED STN",
                    "BLK 134",
                    "SIMS VILLE",
                    "AFT TG KATONG CPLX",
                    "BLK 416",
                    "EUNOS STN/ INT",
                    "CASA SARINA",
                    "OPP HONG SAN SI TP",
                    "KEMBANGAN STN",
                    "OPP PERPETUAL SUCCOUR CH",
                    "CHAI CHEE IND PK",
                    "BLK 32",
                    "BEDOK STN EXIT B",
                    "BLK 221A",
                    "BLK 220 CP",
                    "BLK 403",
                    "BLK 506",
                    "BEDOK RESVR STN EXIT A",
                    "OPP THE CLEARWATER CONDO",
                    "OPP BEDOK REFORM TRG CTR",
                    "TAMPINES WEST STN EXIT B",
                    "BLK 938",
                    "OUR TAMPINES HUB",
                    "TAMPINES INT"
                ]
            }
        },
    },
    8251: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "825",
                destination: {
                    text: "YIO CHU KANG INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "LENTOR LOOP"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "825",
                destination: "LENTOR LOOP",
                secondDestination: {
                    name: "YIO CHU KANG INT",
                    changeIndex: 5
                },
                scrolls: [
                    "YIO CHU KANG INT",
                    "CASTLE GREEN",
                    "SEASONS PARK",
                    "THOMSON GR",
                    "AFT FLORISSA PK",
                    "OPP FUDU WK P/G",
                    "AFT LENTOR ST",
                    "BEF BULLION PK",
                    "COUNTRYSIDE GDN P/G",
                    "AFT LENTOR GR",
                    "OPP THOMSON GR",
                    "OPP SEASONS PARK",
                    "OPP CASTLE GREEN",
                    "YIO CHU KANG STN",
                    "YIO CHU KANG INT"
                ]
            }
        }
    },
    6702: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BEDOK NTH AVE 3",
                    "NEW UPP CHANGI RD",
                    "GEYLANG RD",
                    "JALAN BESAR",
                    "BUKIT TIMAH RD",
                    "UPP BT TIMAH RD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67",
                destination: "CHOA CHU KANG INT",
                scrolls: [
                    "TAMPINES INT",
                    "OPP OUR TAMPINES HUB",
                    "BLK 147",
                    "BEF TAMPINES WEST STN",
                    "BEDOK REFORM TRG CTR",
                    "THE CLEARWATER CONDO",
                    "BEDOK RESVR STN EXIT B",
                    "BLK 109",
                    "BET BLKS 139/140",
                    "OPP BLK 220 CP",
                    "BLK 27",
                    "BEDOK STN EXIT A",
                    "OPP BLK 32",
                    "OPP CHAI CHEE IND PK",
                    "AFT PERPETUAL SUCCOUR CH",
                    "BEF SIGLAP PLAIN",
                    "MJD KASSIM",
                    "BEF LOR 110 CHANGI",
                    "AFT KG EUNOS",
                    "AFT LOR 106 CHANGI",
                    "JOO CHIAT CPLX",
                    "BLK 14 MKT/FC",
                    "CITY PLAZA",
                    "OPP LOR 39 GEYLANG",
                    "AFT LOR 34 GEYLANG",
                    "AFT LOR 28 GEYLANG",
                    "BEF LOR 18 GEYLANG",
                    "OPP MOHD SALLEH MQUE",
                    "AFT SIMS WAY",
                    "OPP LOR 1 GEYLANG TER",
                    "BEF KG BUGIS",
                    "AFT KALLANG RD",
                    "BEF KALLANG BAHRU",
                    "ARC 380",
                    "HOA NAM BLDG",
                    "AFT ALLENBY RD",
                    "OPP VEERASAMY RD",
                    "ROCHOR STN",
                    "LITTLE INDIA STN EXIT A",
                    "OPP KK WOMEN & CHILD HOSP",
                    "NEWTON FC",
                    "NEWTON STN EXIT C",
                    "BALMORAL PLAZA",
                    "CITY TWRS",
                    "LENG KWANG BAPTIST CH",
                    "STEVENS STN",
                    "BEF LEWIS RD",
                    "NUS BT TIMAH CAMPUS",
                    "BOTANIC GDNS STN",
                    "BEF CROWN CTR",
                    "CORONATION PLAZA",
                    "TAN KAH KEE STN",
                    "CHINESE HIGH SCH",
                    "OPP NATL JC",
                    "SIXTH AVE STN",
                    "SIXTH AVE CTR",
                    "AFT MAPLE AVE",
                    "THE TESSARINA",
                    "THE NEXUS",
                    "KING ALBERT PK STN",
                    "KING ALBERT PK",
                    "PEI HWA PRESBY PR SCH",
                    "BEAUTY WORLD STN EXIT B",
                    "WOH HUP BLDG",
                    "BT REGENCY",
                    "AFT OLD JURONG RD",
                    "HUME PK CONDO",
                    "OPP THE RAIL MALL",
                    "HILLVIEW STN",
                    "OPP DAIRY FARM RD",
                    "OPP ASSUMPTION ENG SCH",
                    "BEF CASHEW STN",
                    "MIN OF DEFENCE",
                    "OPP THE LINEAR",
                    "BT PANJANG STN EXIT B",
                    "OPP PHOENIX STN",
                    "OPP BLK 26",
                    "OPP BLK 113",
                    "OPP BLKS 237/239",
                    "BLK 277",
                    "BLK 414",
                    "CHOA CHU KANG INT"
                ]
            }
        }
    },
    8581: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: {
                    text: "CHANGI AIRPORT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 4",
                    "WOODLANDS AVE 9",
                    "WOODLANDS AVE 7",
                    "SEMBAWANG WAY",
                    "CANBERRA RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5,2",
                    "YISHUN CTRL 2",
                    "SLE / TPE",
                    "AIRPORT BOULEVARD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "858",
                scrolls: [
                    "WOODLANDS TEMP INT",
                    "BLK 825",
                    "BLK 853",
                    "BLK 864",
                    "BLK 869",
                    "OPP BLK 754A CP",
                    "OPP BLK 773",
                    "AFT WOODLANDS IND PK E6",
                    "YEW HUAT SCAFFOLDING WORK",
                    "SEAGATE",
                    "AFT GAMBAS AVE",
                    "BLK 469B",
                    "BLK 358A CP",
                    "OPP SEMBAWANG STN",
                    "AFT ADMIRAL HILL",
                    "OPP BLK 311",
                    "THE NAUTICAL",
                    "AFT SEMBAWANG SHOP CTR",
                    "AFT JLN KEMUNING",
                    "BLK 114",
                    "BLK 101",
                    "OPP BLK 701A",
                    "BLK 145",
                    "OPP YISHUN STN",
                    "OPP BLK 757",
                    "YISHUN COMMUNITY HOSP",
                    "BLK 608",
                    "OPP KHATIB STN",
                    "YISHUN SPORTS HALL",
                    "AFT YISHUN AVE 1",
                    "AFT SG SELETAR BRIDGE",
                    "LP 94",
                    "BEF DELETAR CAMP G",
                    "AFT PUNGGOL RD",
                    "AIRPORT POLICE STN",
                    "BEF CHANGI AIRPORT PTB3",
                    "CHANGI AIRPORT PTB3",
                    "CHANGI AIRPORT PTB1",
                    "CHANGI AIRPORT PTB2"
                ]
            }
        }
    },
    8585: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858e",
                destination: {
                    text: "CHANGI AIRPORT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 4",
                    "WOODLANDS AVE 9",
                    "WOODLANDS AVE 7",
                    "SEMBAWANG WAY",
                    "CANBERRA LINK",
                    "SEMBAWANG RD",
                    "YISHUN AVE 2",
                    "SLE / TPE",
                    "AIRPORT BOULEVARD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "858e",
                scrolls: [
                    "WOODLANDS TEMP INT",
                    "BLK 825",
                    "BLK 853",
                    "BLK 864",
                    "BLK 869",
                    "OPP BLK 754A CP",
                    "OPP BLK 773",
                    "AFT WOODLANDS IND PK E6",
                    "YEW HUAT SCAFFOLDING WORK",
                    "SEAGATE",
                    "AFT GAMBAS AVE",
                    "BLK 469B",
                    "BLK 358A CP",
                    "OPP SEMBAWANG STN",
                    "BLK 589D",
                    "OPP VISIONAIRE",
                    "OPP YISHUN SAPPHIRE",
                    "DARUL MAKMUR MOSQUE",
                    "BLK 220",
                    "OPP YISHUN STN",
                    "OPP BLK 757",
                    "BLK 608",
                    "OPP KHATIB STN",
                    "YISHUN SPORTS HALL",
                    "AIRPORT POLICE STN",
                    "BEF CHANGI AIRPORT PTB3",
                    "CHANGI AIRPORT PTB3",
                    "CHANGI AIRPORT PTB1",
                    "CHANGI AIRPORT PTB2"
                ]
            }
        }
    },
    9131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WDL AVE 7,6",
                    "WDL DR 61",
                    "WDL CIRCLE",
                    "MARSILING RISE",
                    "MARSILING RD",
                    "WDL TRAIN CHECKPOINT"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "913",
                destination: "WOODLANDS CIRCLE",
                secondDestination: {
                    name: "WOODLANDS REG INT",
                    changeIndex: 10
                },
                scrolls: [
                    "WOODLANDS TEMP INT",
                    "BLK 825",
                    "BLK 853",
                    "BLK 706",
                    "OPP ADMIRALTY STN",
                    "BEF ADMIRALTY PRI SCH",
                    "BLK 722",
                    "BLK 726",
                    "BLK 713",
                    "BLK 747A CP",
                    "OPP BLK 739A CP",
                    "BLK 786A CP",
                    "OPP ADMIRALTY PRI SCH",
                    "ADMIRALTY STN",
                    "BLK 666",
                    "AFT 888 PLAZA",
                    "BLK 891C CP",
                    "WOODLANDS TEMP INT",
                    "BLK 106",
                    "BLK 120",
                    "OPP BLK 12",
                    "BLK 137",
                    "BEF W'LANDS CTR RD",
                    "MARSILING PK",
                    "W'LANDS TRAIN CHECKPOINT",
                    "OPP BLK 1A",
                    "OPP MARSILING PK",
                    "AFT W'LANDS CTR RD",
                    "OPP BLK 137",
                    "BLK 12",
                    "OPP BLK 120",
                    "OPP BLK 106",
                    "WOODLANDS TEMP INT"
                ]
            }
        }
    },
    9132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913T",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    "WDL INT / MRT"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "913T",
                destination: "WOODLANDS CIRCLE",
                secondDestination: {
                    name: "WOODLANDS CENTRE RD",
                    changeIndex: 10
                },
                scrolls: [
                    "WOODLANDS TEMP INT",
                    "BLK 825",
                    "BLK 853",
                    "BLK 706",
                    "OPP ADMIRALTY STN",
                    "BEF ADMIRALTY PRI SCH",
                    "BLK 722",
                    "BLK 726",
                    "BLK 713",
                    "BLK 747A CP",
                    "OPP BLK 739A CP",
                    "BLK 786A CP",
                    "OPP ADMIRALTY PRI SCH",
                    "ADMIRALTY STN",
                    "BLK 666",
                    "AFT 888 PLAZA",
                    "BLK 891C CP",
                    "WOODLANDS TEMP INT",
                    "BLK 106",
                    "BLK 120",
                    "OPP BLK 12",
                    "BLK 137",
                    "BEF W'LANDS CTR RD",
                    "MARSILING PK",
                    "W'LANDS TRAIN CHECKPOINT",
                    "OPP BLK 1A",
                    "OPP MARSILING PK",
                    "AFT W'LANDS CTR RD",
                    "OPP BLK 137",
                    "BLK 12",
                    "OPP BLK 120",
                    "OPP BLK 106",
                    "WOODLANDS TEMP INT"
                ]
            }
        }
    },
    9133: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WDL AVE 7,6",
                    "WDL DR 61",
                    "WDL CIRCLE",
                    "MARSILING RISE",
                    "MARSILING RD",
                    "MARSILING MRT",
                    "WDL ST 13"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "913",
                destination: "WOODLANDS CIRCLE",
                secondDestination: {
                    name: "WOODLANDS ST 13",
                    changeIndex: 10
                },
                scrolls: [
                    "WOODLANDS TEMP INT",
                    "BLK 825",
                    "BLK 853",
                    "BLK 706",
                    "OPP ADMIRALTY STN",
                    "BEF ADMIRALTY PRI SCH",
                    "BLK 722",
                    "BLK 726",
                    "BLK 713",
                    "BLK 747A CP",
                    "OPP BLK 739A CP",
                    "BLK 786A CP",
                    "OPP ADMIRALTY PRI SCH",
                    "ADMIRALTY STN",
                    "BLK 666",
                    "AFT 888 PLAZA",
                    "BLK 891C CP",
                    "WOODLANDS TEMP INT",
                    "BLK 106",
                    "BLK 120",
                    "OPP BLK 12",
                    "BLK 137",
                    "BEF W'LANDS CTR RD",
                    "MARSILING PRI SCH",
                    "MARSILING STN",
                    "BLK 154",
                    "BLK 146",
                    "AFT W'LANDS CTR RD",
                    "OPP BLK 137",
                    "BLK 12",
                    "OPP BLK 120",
                    "OPP BLK 106",
                    "WOODLANDS TEMP INT"
                ]
            }
        }
    },
    9134: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913M",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "Arial-8"
                },
                scrolls: [
                    "MARSILING RISE",
                    "MARSILING RD",
                    "WOODLANDS AVE 1",
                    "WOODLANDS ST 13"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "913M",
                destination: "WOODLANDS ST 13",
                secondDestination: {
                    name: "WOODLANDS REG INT",
                    changeIndex: 12
                },
                scrolls: [
                    "WOODLANDS TEMP INT",
                    "BLK 106",
                    "BLK 120",
                    "OPP BLK 12",
                    "BLK 137",
                    "BEF W'LANDS CTR RD",
                    "MARSILING PRI SCH",
                    "BLK 303",
                    "FUCHUN CC",
                    "FUCHUN SEC SCH",
                    "BLK 335",
                    "BLK 325",
                    "OPP BLK 347",
                    "OPP BLK 101",
                    "BLK 178",
                    "BLK 173",
                    "OPP BLK 325",
                    "THE WOODGROVE",
                    "OPP FUCHUN SEC SCH",
                    "OPP FUCHUN CC",
                    "OPP BLK 144",
                    "AFT W'LANDS CTR RD",
                    "OPP BLK 137",
                    "BLK 12",
                    "OPP BLK 120",
                    "OPP BLK 106",
                    "WOODLANDS TEMP INT"
                ]
            }
        }
    },
    9201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "920",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "PETIR / JELUBU RD",
                    "SENJA RD / LINK",
                    "JELAPANG RD",
                    "SAUJANA RD",
                    "FAJAR RD",
                    "BT PANJANG RING RD",
                    "BANGKIT RD",
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "920",
                destination: "BANGKIT RD",
                secondDestination: {
                    name: "BT PANJANG INT",
                    changeIndex: 14
                },
                scrolls: [
                    "BT PANJANG INT",
                    "OPP BT PANJANG PLAZA",
                    "BLK 602",
                    "WEST VIEW PRI SCH",
                    "OPP BLK 628",
                    "BLK 636A",
                    "WEST SPRING SEC SCH",
                    "BLK 651",
                    "BLK 532",
                    "BET BLKS 502/503",
                    "BLK 413",
                    "BET BLKS 443A/443B",
                    "BLK 442D",
                    "BANGKIT STN",
                    "OPP BLK 271", // where dest switch from BANGKIT RD to BT PANJANG INT
                    "OPP BLK 253",
                    "OPP BANGKIT STN",
                    "BLK 239",
                    "BLK 401A CP",
                    "BLK 408",
                    "OPP BLK 502",
                    "OPP BLK 532",
                    "OPP BLK 650",
                    "OPP WEST SPRING SEC SCH",
                    "BEF BLK 629A CP",
                    "BLK 628",
                    "BLK 610",
                    "BLK 541A CP",
                    "BT PANJANG PLAZA",
                    "BT PANJANG INT"
                ]
            }
        }
    },
    
    9851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "TECK WHYE AVE",
                    "B. B WEST AVE 7, 4",
                    "B. B WEST AVE 2",
                    "B. B EAST AVE 2",
                    "JLN JURONG KECHIL",
                    "JLN TOA PAYOH",
                    "BENDEMEER ROAD",
                    "KALLANG MRT"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "985",
                destination: "GEYLANG LOR 1 TER",
                scrolls: [
                    "CHOA CHU KANG INT",
                    "LOT 1 SHOPPERS' MALL",
                    "OPP BLK 210",
                    "CCK POLYCLINIC",
                    "BLK 6",
                    "BLK 157",
                    "OPP BLK 26",
                    "BT BATOK FIRE STN",
                    "BEF BT BATOK WEST AVE 5",
                    "OPP BT BATOK DRIVING CTR",
                    "OPP HOMETEAMNS",
                    "BLK 334",
                    "BLK 331",
                    "BLK 315",
                    "BLK 306",
                    "AFT BT BATOK WEST AVE 5",
                    "OPP BLK 628",
                    "BLK 503",
                    "OPP BLK 242",
                    "OPP BLK 258",
                    "OPP BLK 266",
                    "AUTOBACS",
                    "AFT BT BATOK EAST AVE 6",
                    "THE HILLFORD",
                    "AFT CHUN TIN RD",
                    "OPP BLK 19",
                    "OPP BEAUTY WORLD STN",
                    // "GOH & GOH BLDG", // check &
                    "OPP CATHOLIC JC",
                    "OLD POLICE ACADEMY",
                    "TRELLIS TWRS",
                    "AFT BLK 195",
                    // "ST. ANDREW'S VILLAGE", // check . + "
                    "MOM SVCS CTR",
                    "BLK 54",
                    "BLK 44",
                    "OPP BOON KENG STN",
                    "BEF KALLANG PL",
                    "OPP KALLANG STN/BLK 2C",
                    "LOR 1 GEYLANG TER"
                ]
            }
        },
    },
    9852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SERANGOON ROAD",
                    "JLN TOA PAYOH",
                    "JLN JURONG KECHIL",
                    "B. B EAST AVE 2",
                    "B. B WEST AVE 2, 4",
                    "B. B WEST AVE 7",
                    "TECK WHYE AVE"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "985",
                destination: "CHOA CHU KANG INT",
                scrolls: [
                    "LOR 1 GEYLANG TER",
                    "KALLANG STN/OPP BLK 2C",
                    "OPP KALLANG PL",
                    "BLK 7",
                    "BOON KENG STN/BLK 102",
                    "OPP BENDEMEER PR SCH",
                    // "ST. MICHAEL'S PL",
                    "AFT MOONSTONE LANE",
                    // "OPP ST. ANDREW'S VILLAGE",
                    "OPP BLK 195",
                    "OPP TRELLIS TWRS",
                    "CATHOLIC JC",
                    "OPP BT TIMAH PLAZA",
                    "PEI HWA PRESBY PR SCH",
                    "BEAUTY WORLD STN EXIT C",
                    "BLK 18",
                    "SIGNATURE PK CONDO",
                    "OPP THE HILLFORD",
                    "BEF BT BATOK EAST AVE 6",
                    "OPP AUTOBACS",
                    "BLK 267",
                    "BLK 258",
                    "BLK 242",
                    "BLK 240",
                    "BLK 628",
                    "BEF BT BATOK WEST AVE 5",
                    "OPP BLK 305",
                    "OPP BLK 315",
                    "BLK 419",
                    "OPP BLK 336",
                    "HOMETEAMNS",
                    "BT BATOK DRIVING CTR",
                    "AFT BT BATOK WEST AVE 5",
                    "OPP BT BATOK FIRE STN",
                    "BLK 26",
                    "BET BLKS 13/14",
                    "BLK 8",
                    "OPP CCK POLYCLINIC",
                    "AFT BLK 202",
                    "CHOA CHU KANG INT"
                ]
            }
        }
    },
};

EDSImages.SMRT = {
    "logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
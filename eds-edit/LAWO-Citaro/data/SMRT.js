EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 4
            },
            text: "$serviceNumber",
            font: "LAWO-SMRT-26:9",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 1,
                right: 'width(serviceNumber) + len(4)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 14,
                right: 'width(serviceNumber) + len(4)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    calibriOldService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 4
            },
            text: "$serviceNumber",
            font: "LAWO-SMRT-26:9",
            spacing: 2
        },
        destination: {
            align: "left,top",
            margin: {
                left: 1,
                top: 3
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,bottom",
            margin: {
                left: 1,
                bottom: 3
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    message: {
        display: {
            align: "centre-x,top",
            margin: {
                top: {
                    "$marginTop === undefined": 0,
                    "else": "$marginTop"
                },
                left: {
                    "$marginLeft === undefined": 0,
                    "else": "$marginLeft"
                }
            },
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {top: 1}
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {bottom: 1}
        },
        text: "$top"
    },
    testFontMix: {
        display: {
            align: "centre-x,bottom",
            text: "$text",
            spacing: "$spacing"
        }
    },

    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    }
}

EDSFormats.SMRT.scammer = EDSFormats.SBST.standardService;

EDSFormats.SMRT.calibriStandardService = JSON.parse(JSON.stringify(EDSFormats.SMRT.standardService));
EDSFormats.SMRT.calibriStandardService.serviceNumber.font = 'LAWO-SMRT-26:9';

EDSFormats.SMRT.calibriSmallService = JSON.parse(JSON.stringify(EDSFormats.SMRT.standardService));
EDSFormats.SMRT.calibriSmallService.serviceNumber.font = 'LAWO-SMRT-26:9';

EDSData.SMRT = {
    1: {
        1: {
            front: {
                renderType: 'message',
                text: 'CHARTERED',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: 'message',
                text: 'ANG MO KIO DEPOT',
                font: 'LAWO-SMRT-26:9', // not this font but idk what
                spacing: 2
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: 'message',
                text: 'KRANJI DEPOT',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    4: {
        1: {
            front: {
                renderType: 'message',
                text: 'SMRT BUSES',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "OFF",
                topfont: "LAWO-SMRT-11",

                bottom: "SERVICE",
                bottomfont: "LAWO-SMRT-11"
            }
        }
    },
    6: {
        1: {
            front: {
                renderType: 'message',
                text: 'WOODLANDS DEPOT',
                font: 'LAWO-SMRT-26:9', // check font
                spacing: 2
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "message",
                text: "OUT OF SERVICE",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            },
        }
    },
    8: {
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: 'message',
                text: 'ON DRIVING TEST',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    10: {
        1: {
            front: {
                renderType: 'message',
                text: 'FERRY SERVICE',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: 'message',
                text: 'MRT SHUTTLE',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: 'message',
                text: 'TRAINING BUS',
                font: 'LAWO-SMRT-26:9', // check, also looks like calibri
                spacing: 2
            }
        }
    },
    58: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR5", // from memory the NR5 is kinda corrupted but need check
                destination: {
                    text: "WHAMPOA",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [""],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    61: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR7",
                destination: {
                    text: "PASIR RIS",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [""],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    106: {
        1: {
            front: {
                renderType: 'message',
                text: 'NGEE ANN POLY',
                font: 'LAWO-SMRT-26:9',
                spacing: 2
            }
        }
    },
    113: {
        1: {
            front: {
                renderType: 'message',
                text: 'AIRSHOW SHUTTLE',
                font: 'LAWO-SMRT-26:9', // check font
                spacing: 1
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
        }
    },
    118: {
        1: {
            front: {
                renderType: "message",
                text: "SMRT FLY OUR FLAG",
                font: "LAWO-SMRT-26:9",
                spacing: 1
            }
        }
    },
    119: {
        1: {
            front: {
                renderType: "message",
                text: "SMRT",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            },
        }
    },
    218: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "300",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CHOA CHU KANG WAY"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    217: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913E",
                destination: {
                    text: "ENDS AT",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913E",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    219: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "302",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG ST 52"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    222: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "307",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CCK CENTRAL"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    252: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "903",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WOODLANDS CENTRE"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    253: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "911",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    255: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 7,6',
                    'WOODLANDS DR 61',
                    'WOODLANDS CIRCLE',
                    'MARSILING RISE',
                    'MARSILING RD',
                    'WDL TRAIN CHECKPOINT',
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    256: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "BPS1", // TODO: font
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "SEGAR RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    285: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "301",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CCK AVE 2, 3"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    288: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "307",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CCK DR"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    381: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "ArialBold-8",

                bottom: "JOO KOON - JURONG EAST",
                bottomfont: "LAWO-SMRT-11"
            }
        }
    },
    382: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "ArialBold-8",

                bottom: "JURONG EAST - JOO KOON",
                bottomfont: "LAWO-SMRT-11"
            }
        }
    },
    383: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 4",
                topFont: "ArialBold-8",

                bottom: "CHOA CHU KANG-JURONG EAST",
                bottomFont: "Arial-8;Space-Width=1"
            }
        }
    },
    384: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 4",
                topFont: "ArialBold-8",

                bottom: "JURONG EAST-CHOA CHU KANG",
                bottomFont: "Arial-8;Space-Width=1"
            }
        }
    },
    420: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "CLEMENTI via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BT PANJANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    422: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "BOON LAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WDL AVE 3",
                    "JURONG EAST AVE 1",
                    "BT PANJANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    423: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "WOODLANDS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    424: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "859",
                destination: {
                    text: "SEMBAWANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    425: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "859",
                destination: {
                    text: "YISHUN via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    431: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "852",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 6"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    440: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "855",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "UPP THOMSON RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    441: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "855",
                destination: {
                    text: "YISHUN via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "LOWER DELTA RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    444: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "980",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    445: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "980",
                destination: {
                    text: "SEMBAWANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    477: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "NEW BRIDGE RD via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'BT PANJANG RD',
                    'STEVENS ROAD',
                    'ORCHARD ROAD',
                    'HILL STREET',
                    'CHINATOWN'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    478: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "CHOA CHUA KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'HILL STREET',
                    'SOMERSET RD',
                    'SCOTTS RD',
                    'STEVENS RD',
                    'BUKIT PANJANG RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    492: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "700A",
                destination: {
                    text: "SUNTEC CITY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "DUNEARN RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    494: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "927",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "MANDAI RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    495: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "927",
                destination: {
                    text: "SINGAPORE ZOO via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CHOA CHU KANG AVE 4"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    512: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "970",
                destination: {
                    text: "SHENTON WAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "HILLVIEW RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    525: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "941",
                destination: {
                    text: "BT BATOK via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "B.B WEST AVE 3 , 6"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    539: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "173",
                destination: {
                    text: "CLEMENTI via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "JLN JURONG KECHIL",
                    "HUME AVE"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    540: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "173",
                destination: {
                    text: "BT BATOK via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "JLN JURONG KECHIL"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    553: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "188E",
                destination: {
                    text: "HARBOURFRONT",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BT BATOK WEST AVE 4"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    576: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "963R",
                destination: {
                    text: "SENTOSA via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WOODLANDS AVE 3"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    578: {
        1: {
            front: {
                renderType: "message",
                text: "RESORT WORLD SENTOSA RWS88",
                font: "CalibriBold-8",
                marginTop: 3,
                spacing: 1
            }
        }
    },
    582: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "858",
                destination: {
                    text: "CHANGI AIRPORT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        },
        rear: {
            renderType: "rearService",
            serviceNumber: "858",
            font: "Calibri-17",
            spacing: 2
        }
    },
    584: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "106",
                destination: {
                    text: "SHENTON WAY TER via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "B.B WEST AVE 3",
                    "TOH TUCK RD"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    585: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "106",
                destination: {
                    text: "BT BATOK via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BAYFRONT AVE"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    586: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "188R",
                destination: {
                    text: "RWS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "B.B WEST AVE 2"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    587: {
        1: {
            front: {
                renderType: "calibriOldService",
                serviceNumber: "188R",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "TOH GUAN RD"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    589: {
        1: {
            front: {
                renderType: "calibriOldService",
                serviceNumber: "966",
                destination: {
                    text: "MARINE PARADE via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "PENDING RD"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    590: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "971E",
                destination: {
                    text: "CECIL ST via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BT PANJANG RING RD",
                    "JELAPANG RD",
                    "SEGAR/FAJAR RD",
                    "WHITLEY RD",
                    "SCOTTS/ORCHARD RD",
                    "NICOLL HIGHTWAY", // sic
                    "COLLYER QUAY",
                    "ANSON RD"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    591: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "178",
                destination: {
                    text: "BOON LAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        },
    },
    592: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "178",
                destination: {
                    text: "WOODLANDS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        },
    },
    598: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: {
                    text: "YISHUN INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "YISHUN RING RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    614: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "CLEMENTI via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'BT PANJANG RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    615: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "BT PANJANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'BT PANJANG RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    624: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "975",
                destination: {
                    text: "LIM CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "TECK WHYE AVE"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    649: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "850E",
                destination: {
                    text: "SHENTON WAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "YISHUN RING RD"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },

    6101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: {
                    text: "EUNOS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'CLEMENTI RD',
                    'HOLLAND RD',
                    'HOLLAND AVE',
                    'TELOK BLANGAH RD',
                    'CHINATOWN',
                    'VICTORIA ST',
                    'KALLANG BAHRU',
                    'MACPHERSON RD',
                    'UBI AVE 2'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "61",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    6102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'UBI AVE 2',
                    'MACPHERSON RD',
                    'KALLANG BAHRU',
                    'NORTH BRIDGE RD',
                    'SOUTH BRIDGE RD',
                    'TELOK BLANGAH RD',
                    'HOLLAND RD',
                    'CLEMENTI RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "61",
                font: "LAWO-SMRT-26:9",
                spacing: 2
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
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'UPP BT TIMAH RD',
                    'DUNEARN RD',
                    'SERANGOON RD',
                    'SIMS AVE',
                    'NEW UPP CHANGI RD',
                    'BEDOK NORTH AVE 3'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    6702: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'BEDOK NTH AVE 3',
                    'NEW UPP CHANGI RD',
                    'GEYLANG RD',
                    'JALAN BESAR',
                    'BUKIT TIMAH RD',
                    'UPP BT TIMAH RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: {
                    text: "CHANGI AIRPORT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "COMASSVALE DR"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: {
                    text: "COMPASSVALE INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "PTB 3, 1, 2, 4"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1671: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: {
                    text: "BT MERAH via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'JLN BT MERAH'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1672: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: {
                    text: "SEMBAWANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CANTOMENT RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1691: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: {
                    text: "WOODLANDS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 8, 9'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1711: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: {
                    text: "MARINA CENTRE via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "SEMBAWANG RD",
                    "DUNEARN RD",
                    "ORCHARD RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1761: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "176",
                destination: {
                    text: "BT MERAH via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BT BATOK CTR/MRT", // check order??
                    "JURONG TOWN HALL",
                    'W.COAST HIGHWAY',
                    'TELOK BLANGAH RD',
                    "UPP BT TIMAH RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "176",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    1781: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "178",
                destination: {
                    text: "BOON LAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "178",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    1782: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "178",
                destination: {
                    text: "WOODLANDS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "178",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    1841: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "CLEMENTI via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'BT PANJANG RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1842: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "BT PANJANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'BT PANJANG RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1871: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "BOON LAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WDL AVE 3",
                    "JURONG EAST AVE 1",
                    "BT PANJANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "187",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1872: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "WOODLANDS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "187",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1881: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "188",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CHOA CHU KANG WAY",
                    {
                        text: "BT BATOK WEST AVE 4",
                        font: "Arial-7",
                    },
                    {
                        text: "BT BATOK WEST AVE 2",
                        font: "Arial-7",
                    },
                    {
                        text: "BT BATOK WEST AVE 3",
                        font: "Arial-7",
                    },
                    {
                        text: "BT BATOK WEST AVE 6",
                        font: "Arial-7",
                    },
                    "TOH GUAN RD",
                    "HAW PAR VILLA",
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "188",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1882: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "188",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BOON LAY WAY",
                    "TOH GUAN RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "188",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    1901: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "KAMPONG BAHRU via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'BT PANJANG RD',
                    'STEVENS ROAD',
                    'ORCHARD ROAD',
                    'HILL STREET',
                    'CHINATOWN'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    1902: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "CHOA CHUA KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'HILL STREET',
                    'SOMERSET RD',
                    'SCOTTS RD',
                    'STEVENS RD',
                    'BUKIT PANJANG RD'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    3021: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "302",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG ST 52"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    7001: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "700",
                destination: {
                    text: "SHENTON WAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BT PANJANG RD",
                    "PETIR RD",
                    "DUNEARN RD",
                    "SCOTTS RD",
                    "ORCHARD RD",
                    //?
                    "COLLYER QUAY"
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    7002: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "700",
                destination: {
                    text: "BT PANJANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "STAMFORD RD",
                    "SOMERSET RD",
                    "ORCHARD TURN",
                    "SCOTTS RD",
                    "BT TIMAH RD",
                    "PETIR RD",
                    "BT PANJANG RD",
                ],
                scrollFont: "LAWO-SMRT-11"
            }
        }
    },
    8541: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: {
                    text: "YISHUN via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    8251: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "825",
                destination: {
                    text: "LENTOR",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "LOOP"
                ],
                scrollFont: 'ArialBold-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "825",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    8541: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: {
                    text: "YISHUN via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    8572: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: {
                    text: "YISHUN via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LAWO-SMRT-26:9",
                spacing: 2
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
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WOODLANDS AVE 4",
                    "WOODLANDS AVE 9",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    8681: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "868E",
                destination: {
                    text: "SUNTEC CITY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "JURONG EAST CTRL",
                    "TEMASEK BLVD/AVE"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "868E",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9001: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "900",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL AVENUE 7',
                    'WDL AVENUE 4',
                    'WDL DRIVE 14',
                    'WDL AVENUE 4',
                    'WDL AVENUE 7'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "900",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9002: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "900A", // fonts all messed up ????
                destination: {
                    text: "WOODLANDS INT",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 7',
                    'WOODLANDS AVE 4',
                    'WOODLANDS DR 14',
                    // '' ??
                    'INNOVA JC',
                    'WOODLANDS AVE 4',
                    'WOODLANDS AVE 7'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "900A",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9011: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "901",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 2,1',
                    'WOODLANDS DRIVE 16',
                    'WOODLANDS AVE 6',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "901",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9021: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "902",
                destination: {
                    text: "REPUBLIC",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'POLYTECHNIC',
                ],
                scrollFont: 'ArialBold-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "902",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9031: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 2', // scrolls??
                    "TRAIN CHECKPOINT"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "903",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9032: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903M",
                destination: {
                    text: "WOODLANDS INT",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 2', // scrolls??
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "903M",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9041: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "904",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 7,6',
                    'WDL DRIVE 62,73',
                    'WDL CRESENT(LOOP)',
                    'WDL DRIVE 73,62',
                    'WOODLANDS AVE 6,7',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "904",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 7',
                    'WOODLANDS ST 83',
                    'WOODLANDS AVE 2',
                    'WOODLANDS ST 13',
                    'WDL TRAIN CHECKPOINT',
                    'WOODLANDS ST 13'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "911",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911T", // wot??
                destination: {
                    text: "ENDS AT",
                    font: "LAWO-9"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: 'LAWO-9'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "911T",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9122: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912A",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL AVE 2,5',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912A",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912B",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912B",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912T",
                destination: {
                    text: "ENDS AT",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912T",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9125: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912M",
                destination: {
                    text: "WOODLANDS INT",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912M",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 7,6',
                    'WOODLANDS DR 61',
                    'WOODLANDS CIRCLE',
                    'MARSILING RISE',
                    'MARSILING RD',
                    'WDL TRAIN CHECKPOINT',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913",
                font: "LAWO-SMRT-26:9",
                spacing: 2
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
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913T",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9133: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'WOODLANDS AVE 7,6',
                    'WOODLANDS DR 61',
                    'WOODLANDS CIRCLE',
                    'MARSILING RISE',
                    'MARSILING RD',
                    'MARSILING MRT',
                    'WOODLANDS ST 13',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913",
                font: "LAWO-SMRT-26:9",
                spacing: 2
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
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'MARSILING RISE',
                    'MARSILING RD',
                    'WOODLANDS AVE 1',
                    'WOODLANDS ST 13',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913M",
                font: "LAWO-SMRT-26:9",
                spacing: 2
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
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'PETIR / JELUBU RD',
                    'SENJA RD / LINK',
                    'JELAPANG RD',
                    'SAUJANA RD',
                    'FAJAR RD',
                    'BT PANJANG RING RD',
                    'BANGKIT RD',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "920",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9512: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "951E",
                destination: {
                    text: "WOODLANDS ST 82",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'ROBINSON RD',
                    'STAMFORD RD',
                    'DHOBY GHAUT MRT',
                    {
                        text: 'WOODLANDS AVE 5, 4',
                        font: 'Arial-7'
                    },
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "951E",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    9601: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960",
                destination: {
                    text: "MARINA CTR via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WOODLANDS RD",
                    'BT TIMAH RD',
                    "BRAS BASAH RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9602: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960",
                destination: {
                    text: "WOODLANDS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "VICTORIA ST",
                    "ROCHOR RD",
                    "BT TIMAH RD",
                    "WHITLEY RD",
                    "PIE/BKE",
                    "BT PANJANG RD/LRT",
                    "WOODLANDS RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9604: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960e",
                destination: {
                    text: "WOODLANDS via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "RAFFLES AVE",
                    "VICTORIA ST",
                    'BT TIMAH RD',
                    "WOODLANDS AVE 3"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960e",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9631: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'ALEXANDRA RD',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9641: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "964",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WOODLANDS AVE 7,6",
                    "WOODLANDS LOOP"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "964",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9651: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "WOODLANDS AVE 7,6",
                    "WOODLANDS LOOP"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "964",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9701: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: {
                    text: "SHENTON WAY via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "HILLVIEW AVE"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9702: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: {
                    text: "BT PANJANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "HILLVIEW AVE"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9721: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972",
                destination: {
                    text: "ORCHARD RD via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BKE / PIE"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9731: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "973",
                destination: {
                    text: "BT PANJANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "BT PANJANG RD",
                    "PENDING RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9751: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "975",
                destination: {
                    text: "LIM CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "TECK WHYE AVE"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "975",
                font: "Calibri-15",
                spacing: 2
            }
        }
    },
    9754: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "975B",
                destination: {
                    text: "ENDS AT OPP",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "LIM CHU KANG LANE 3"
                ],
                scrollFont: 'LAWO-SMRT-11'
            }
        }
    },
    9791: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "979",
                destination: {
                    text: "BT PANJANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'PETIR / JELUBU RD',
                    'WOODLANDS RD',
                    {
                        text: 'CHOA CHU KANG NORTH 5',
                        font: 'Arial-7'
                    },
                    {
                        text: 'CHOA CHU KANG ST 52/DR',
                        font: 'Arial-7'
                    },
                    {
                        text: 'CHOA CHU KANG NORTH 7',
                        font: 'Arial-7'
                    },
                    'C.C.K CRES (LOOP)'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "979",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    9831: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "983",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "PETIR RD",
                    "CHOA CHU KANG RD"
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "983",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        },
    },
    9851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'TECK WHYE AVE',
                    'B. B WEST AVE 7, 4',
                    'B. B WEST AVE 2',
                    'B. B EAST AVE 2',
                    'JLN JURONG KECHIL',
                    'JLN TOA PAYOH',
                    'BENDEMEER ROAD',
                    'KALLANG MRT'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "985",
                font: "LAWO-SMRT-26:9",
                spacing: 2
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
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    'SERANGOON ROAD',
                    'JLN TOA PAYOH',
                    'JLN JURONG KECHIL',
                    'B. B EAST AVE 2',
                    'B. B WEST AVE 2, 4',
                    'B. B WEST AVE 7',
                    'TECK WHYE AVE'
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "985",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9911: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    '',
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9912: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    "CHOA CHU KANG AVE 1,3",
                    "BT BATOK WEST AVE 6,3",
                    "BT BATOK WEST AVE 5,8"
                ],
                scrollFont: 'LAWO-SMRT-11;Space-Width=0'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991",
                font: "LAWO-SMRT-26:9",
                spacing: 2
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "1234567890ABMT",
                destination: {
                    text: "",
                    font: "LAWO-SMRT-11"
                },
                scrolls: [
                    ''
                ],
                scrollFont: "LAWO-SMRT-11"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "1234567890ABMT",
                font: "LAWO-SMRT-26:9",
                spacing: 2
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

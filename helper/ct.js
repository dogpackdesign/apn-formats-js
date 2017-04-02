{
    ct: {
        fairfield: {
            regex: [
                "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{4}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{4}/\\[A-Z]$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\[A-Z]-\\d{2}\\s\\[A-Z]:\\d{5}\\s\\[A-Z]:\\d{3}$"
            ],
            fips: "09001",
            formats: ["AAAASA:XXXSA:XXXX", "AAAASA:XXXXSA:XX", "AAAASA:XXSA:XXXX/A", "AAAASA:XXSA:XX", "AAAASA:A-XXSA:XXXXXSA:XXX"]
        },
        hartford: {
            regex: [
                "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{4}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\[A-Z]\\d\\[A-Z]\\s\\[A-Z]:\\d{2}$"
            ],
            fips: "09003",
            formats: ["AAAASA:XXXSA:XXXSA:XXX", "AAAASA:XXXSA:XXX", "AAAASA:XXSA:XXX", "AAAASA:XXXSA:XXXX", "AAAASA:AXASA:XX"]
        },
        litchfield: {
            regex: [
                "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\[A-Z]\\d\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{4}$"
            ],
            fips: "09005",
            formats: ["AAAASA:XXXSA:XXXSA:XXX", "AAAASA:XXSA:XX", "AAAASA:XXSA:XXSA:XX", "AAAASA:XXXXSA:XXXXSA:XX" "AAAASA:AXSA:XXSA:XXXX"]
        },
        middlesex: {
            regex: [
                "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{4}$", "^\\[A-Z]{4}\\s\\d{8}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\[A-Z]\\d{2}\\s\\[A-Z]:\\[A-Z]\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{3}$"
            ],
            fips: "09007",
            formats: ["AAAASA:XXSA:XXXX", "AAAASXXXXXXXX", "AAAASA:AXXSA:AXXX", "AAAASA:XXXSA:XXXSA:", "AAAASA:XXSA:XXX"]
        },
        "new haven": {
            regex: [
                "^\\[A-Z]{4}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{4}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{5}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{2}-\\d{4}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{5}\\s\\[A-Z]:\\d{6}$"
            ],
            fips: "09009",
            formats: ["AAAASA:XXXXSA:XXXXSA:XXXX", "AAAASA:XXXSA:XXXXSA:XXXXX", "AAAASA:XXXSA:XXX", "AAAASA:XXXXSA:XXXSA:XX-XXXX", "AAAASA:XXXXXSA:XXXXXSA:XXXXXX"]
        },
        "new london": {
            regex: [
                "^\\[A-Z]{4}\\s\\d{12}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{4}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}.\\d\\s\\[A-Z]:\\d{5}\\s\\[A-Z]:\\d{5}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}$"
            ],
            fips: "09011",
            formats: ["AAAASXXXXXXXXXXXX", "AAAASA:XXXSA:XXXX", "AAAASA:XXX.XSA:XXXXXSA:XXXXX", "AAAASA:XXSA:XSA:XX", "AAAASA:XXXSA:XXXSA:XXX"]
        },
        tolland: {
            regex: [
                "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{4}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{5}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\[A-Z]\\s\\[A-Z]:\\d{2}-\\d{2}$"
            ],
            fips: "09013",
            formats: ["AAAASA:XXXSA:XXXSA:XXXX", "AAAASA:XXSA:XXX", "AAAASA:XXSA:XXXXSA:XXXXX", "AAAASA:XXSA:XXSA:XX" "AAAASA:XXSA:ASA:XX-XX"]
        },
        windham: {
            regex: [
                "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{3}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{2}-\\d{2}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{2}$", "^\\[A-Z]{4}\\s\\[A-Z]:\\d{3}\\s\\[A-Z]:\\d{4}\\s\\[A-Z]:\\d{4}$"
            ],
            fips: "09015",
            formats: ["AAAASA:XXXSA:XXXSA:XXX", "AAAASA:XXSA:XX", "AAAASA:XXXSA:XX" "AAAASA:XX-XXSA:XXXSA:XX", "AAAASA:XXXSA:XXXXSA:XXXX"]
        }
    }
}

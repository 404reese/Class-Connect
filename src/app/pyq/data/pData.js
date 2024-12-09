const pData = [
    {
        "id": 1,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EM",
        "note": "EM TT2 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EfSAONw4se1OjoFv9jF0Y7sBNTySw2v5c8cyCLSzTsk2DQ?e=BrANrK"
    },
    {
        "id": 2,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EM1",
        "note": "EM1 TT2 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EaWseijguPxMgzhEuvpSJ5IBo_tQ24hp5zXfPxbCJlJx_Q?e=QmZmSh"
    },
    {
        "id": 3,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EP",
        "note": "EP TT2 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ec_VCMA753VHltY-ZFViiIMBNhHV_Re0jM7WlgggBBGRlA?e=sxLTXA"
    },
    {
        "id": 4,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EC",
        "note": "EC TT2 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EVFxmMM27WZBsyeYtO9ja_8B_s-JKYpbySbwb9HpBtV5iQ?e=i82O6E"
    },
    {
        "id": 5,
        "department": "FY",
        "semester": "Sem1",
        "subject": "BEE",
        "note": "BEE TT2 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EbpIwtjXVHdOk4IcMzdPTPkBYpjGt9gfaQNS32-4gKgp7Q?e=2yS2qy"
    },
    {
        "id": 6,
        "department": "Comps",
        "semester": "Sem3",
        "subject": "All",
        "note": "COMPS Sem3 TT1 AY22-23",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/Ev-VsA5PIJJPpxoyPR-Jy_4BcuNhsI65r_QpnWNXRrrUTg?e=sYWj8D"
    },
    {
        "id": 7,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "All",
        "note": "AI-DS Sem3 TT1 AY22-23",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EiY-qKW8fytBtyxyAgvzabgBlTkm1v6PLu1COHsoYhtqQw?e=53Bs1H"
    },
    {
        "id": 8,
        "department": "Comps",
        "semester": "Sem4",
        "subject": "All",
        "note": "AI-DS Sem4 TT2 Papers",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ERg5AVaIpRRJmkVMlGEGyc4BQL0EYEYyPBe4PWwt4Xdc_A?e=oLLUIg"
    },
    {
        "id": 9,
        "department": "AIDS",
        "semester": "Sem4",
        "subject": "All",
        "note": "AI-DS Sem4 TT2 Papers",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ERg5AVaIpRRJmkVMlGEGyc4BQL0EYEYyPBe4PWwt4Xdc_A?e=oLLUIg"
    },
    {
        "id": 10,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EM",
        "note": "EM TT1 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EdSNf0Rr9wxBiZK8daVGS6YBMlnWHRqirO9curdxIlb4Gg?e=MIJ09U"
    },
    {
        "id": 11,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EM1",
        "note": "EM1 TT1 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ee4VPUZnLGxLqEfbHHbB4IMBpBN81IcyMNTAzgQiNZfXlg?e=IGvBR4"
    },
    {
        "id": 12,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EP",
        "note": "EP TT1 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EQNUQbCA7VFDnAPdsf5h0SEBsevSiww0bwpXRxIfIZdZsA?e=UbqbTw"
    },
    {
        "id": 13,
        "department": "FY",
        "semester": "Sem1",
        "subject": "EC",
        "note": "EC TT1 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ecp8EVv1PXBBkkYI1rDsPyQBx9XiGZq_ClgZRVv1qrbqWw?e=ZnltjC"
    },
    {
        "id": 14,
        "department": "FY",
        "semester": "Sem1",
        "subject": "BEE",
        "note": "BEE TT1 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EfFNpPzaj1pBsR-8iTfIO1UBJwoT0m2d6T4aehzPcRVeNQ?e=8aarl5"
    },
    {
        "id": 15,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Chem 2",
        "note": "sem 2 ESE chemistry",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ER2PYmz_VH5Er3hJpD0UJKcBNRnEsQzUQAzxc8qSS_APoA?e=7wdQPL"
    },
    {
        "id": 16,
        "department": "FY",
        "semester": "Sem2",
        "subject": "CP",
        "note": "sem 2 ESE CP",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ERpR-H4OPjpNgRJKbj3-OLQBuOe5JIsk9cXPP1bA88baRA?e=C91PTU"
    },
    {
        "id": 17,
        "department": "FY",
        "semester": "Sem2",
        "subject": "EG",
        "note": "sem 2 ESE EG",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ETMU-U_Aw3lHkItaKHxLxCgB9ifJWKRmIeVxy6Xa14wphw?e=MQDhyK"
    },
    {
        "id": 18,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Maths 2",
        "note": "sem 2 ESE maths 2",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ETnaY4amqKNLk9pbUG0Jxu4BBF6RUuQqsiL2L1FTdSecww?e=hZHAdv"
    },
    {
        "id": 19,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Phy 2",
        "note": "sem 2 ESE PN",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ec94hTX4sK9BgxY8vZqJDbUBU_4bEG6PJVJHJ_wRCJqrXg?e=1uLiya"
    },
    {
        "id": 20,
        "department": "FY",
        "semester": "Sem2",
        "subject": "All",
        "note": "Sem 2 TT2 2023-24",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EfBaolvw_5BGidBcGLQ8E0YBWpAYoyEtYKOTvNai4MOOCQ?e=94EbbB"
    },
    {
        "id": 21,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Chem 2",
        "note": "Sem 2 TT1 Chem",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EdSEvTbfkbBLmwxdU-CGmhEBcuhxDz7m2MITV3sHWMffew?e=Ro7Nz6"
    },
    {
        "id": 22,
        "department": "FY",
        "semester": "Sem2",
        "subject": "CP",
        "note": "sem 2 TT1 CP",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES84YlvSghRKg2LPg0bNvj4B0uxYLrFYrdSOZfcNxcHMew?e=sA1pr6"
    },
    {
        "id": 23,
        "department": "FY",
        "semester": "Sem2",
        "subject": "EG",
        "note": "sem 2 TT1 EG",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES_wGl85WLRDkvvMQaf45JkB0xKq4OMArtyhZg4b22E71g?e=IwejtK"
    },
    {
        "id": 24,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Maths 2",
        "note": "sem 2 TT1 maths 2",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EWYk_nOMJgZNnysJwp1xjDkBeDhcKvnPBYbRhlXuiK43kg?e=klzZDG"
    },
    {
        "id": 25,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Phy 2",
        "note": "sem 2 TT1 PN",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EbuWbKMVYllBtPBPCeVP8AsBL69mRWINogX2pTatPBSPsA?e=vlOgsk"
    },
    {
        "id": 26,
        "department": "FY",
        "semester": "Sem2",
        "subject": "CP",
        "note": "CP Old ESE Papers",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EkL2Q3Pc71lIuVL8-0MDfokBFPrE3Hxay8pUI9Z0ki8ZdA?e=VSihLh"
    },
    {
        "id": 27,
        "department": "FY",
        "semester": "Sem2",
        "subject": "EG",
        "note": "EG Old ESE Papers",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EuV9omP0DbFCsJ29A4fUdNAB0KO8RZY6DO8tG4Af9hbZZQ?e=esFqMS"
    },
    {
        "id": 28,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Maths 2",
        "note": "M2 Old ESE Papers",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/Eulw2eTT_8lPpSjY_ccIC_YBkkluwHYlUtqbt3l2qM1Dgw?e=YkRHVt"
    },
    {
        "id": 29,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Chem 2",
        "note": "chem 2 Old ESE Papers",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EhB7jTUg2-1OvimO677RyWgBNe9d4BPiS3NX0-auKskd0A?e=yQfLYT"
    },
    {
        "id": 30,
        "department": "FY",
        "semester": "Sem2",
        "subject": "Phy 2",
        "note": "physics Old ESE papers",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EifRVHd453VNt6b6-3Q2zJQBVuBhJmE28QDab1OfRPn_dw?e=XWJ63C"
    }
];
export default pData;
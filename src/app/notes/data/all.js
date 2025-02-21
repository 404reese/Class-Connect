const allData = [
    {
        "id": 1,
        "department": "ALL",
        "semester": "Sem4",
        "subject": "AME2",
        "note": "Maths 4 Notes",
        "name": "Collection",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/ElelH7V2yClBtWOVV0FTw1IBnBE_SWryas1JLLfQSJ9flw?e=JYMnbK"
    },
    {
        "id": 2,
        "department": "ALL",
        "semester": "Sem4",
        "subject": "AME2",
        "note": "Maths 4 PYQs",
        "name": "Collection",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EsNBuIDQ_NhEkFedHevLV9YB9CIpvv5uN_87SRmsCnWEwg?e=SptuAx"
    },
    {
        "id": 3,
        "department": "COMPS",
        "semester": "Sem4",
        "subject": "AOA",
        "note": "AOA Master folder",
        "name": "Collection",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EkyNRXIxBFxFgahGr6fZoFMBn53mOZvx1j20fxPixOOGqw?e=XIaaYL"
    },
    {
        "id": 4,
        "department": "COMPS",
        "semester": "Sem4",
        "subject": "DBMS",
        "note": "DBMS Master folder",
        "name": "Collection",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EqgL88v4VKVBgOpeaX7RJZABPMzagr-9lBcBwBVqM_hFWQ?e=H8huyN"
    },
    {
        "id": 5,
        "department": "AIDS",
        "semester": "Sem4",
        "subject": "OS",
        "note": "OS Master folder",
        "name": "Collection",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EgN5S1lCllpCgh-tbVTfTnIB7-sen90lr66K0WY4Rpy3VA?e=fgk3Ho"
    },
    {
        "id": 6,
        "department": "COMPS",
        "semester": "Sem4",
        "subject": "OS",
        "note": "OS Master folder",
        "name": "Collection",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EgN5S1lCllpCgh-tbVTfTnIB7-sen90lr66K0WY4Rpy3VA?e=fgk3Ho"
    },
    {
        "id": 7,
        "department": "COMPS",
        "semester": "Sem4",
        "subject": "MP",
        "note": "MP Master folder",
        "name": "Collection",
        "link": "https://somaiya0-my.sharepoint.com/:f:/g/personal/riddhesh_c_somaiya_edu/EhhuxLcP-XdEqJb6r112nlYBad1JWc7o3_DEYyXI0XqSGA?e=XY1lCn"
    },
    {
        "id": 8,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths 3 GV Kumbhojkar",
        "name": "from Telegram",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES-T4iXGjeBFrXtrLKmnJXQBlBRvht5DACIW8lfOxO7ZJw?e=fIizJn"
    },
    {
        "id": 9,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DSA M4 Trees",
        "name": "By Vidya Mam",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EdPDXxQDEzFGqbcwxh4-Ih0Bl5eEKPPtY4J__GdpUsrexA?e=LUUJrc"
    },
    {
        "id": 10,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DSA M5 Graph Application",
        "name": "By Vidya Mam",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EQN1VHZbKtVNgPsPjcccZ0wBQyRZxr_xXFakwIa9idTkFA?e=BEbq2u"
    },
    {
        "id": 11,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DSA M5 BFS",
        "name": "By Vidya Mam",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ea4yOgvOa8FKjNF4XNVaHNMBX5ADeH7TtEDIy7TfwiyNMg?e=9dAF4S"
    },
    {
        "id": 12,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DSA M5 DFS",
        "name": "By Vidya Mam",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ef8KZtGqIXFBhbbs2lyRLFoBw0u0OfFaeo12PLzl6I_r9g?e=7lRGM0"
    },
    {
        "id": 13,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DSA M5 Graph  ",
        "name": "By Vidya Mam",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EUB_mIjfHQlNmGu-9rbneYMBIeJQBHxX59agUI7C2tJquw?e=ec0YEY"
    },
    {
        "id": 14,
        "department": "AIDS",
        "semester": "Sem4",
        "subject": "DSA",
        "note": "DSA M6.1 Searching",
        "name": "By Vidya Mam",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EcAool1L9s9FihSJP3MkRrwBbd13ndmobOHTWBERT__bNA?e=fdCWsb"
    },
    {
        "id": 15,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 1",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EezU3p7lJepFsks7_t0tZSUB1kZmu_kvUYU6za-rw1L6ng?e=K9iHgS"
    },
    {
        "id": 16,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 2",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ec7pctViMAJDkgmx2Q431p8BzguvvU3gtyqrz2GWbB2hqg?e=G3GNkf"
    },
    {
        "id": 17,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 3",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EXe_Mr9UbfFPj2-sW-I5gZsB_kgAUC9BvE21iMuCzL79Hw?e=9cPqpe"
    },
    {
        "id": 18,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 4",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES_tiFG_cuRJk49ZtbBrUbkB6_ZMRo9twz0D6vltTiBvpw?e=DW90pB"
    },
    {
        "id": 19,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 5",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EUBb0PyBAqtLucfeLAzqgoEBpCfFKOEVCDx3gnScw3QiPw?e=jmOg36"
    },
    {
        "id": 20,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 6",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ER12BP7fpHNAqceYYdwjxwAB28_LMJuIzLzLQzOHcALicg?e=4wKxel"
    },
    {
        "id": 21,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DAA",
        "note": "DAA Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EY6QhbV9orlNgHhPK2orvS0BBMR4L7Tiy-zG8ng2vdGLcA?e=glA9rk"
    },
    {
        "id": 22,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DAA",
        "note": "DAA Mod - 4,5,6 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EX2ik4q9-59MgPKNZe6IPUYBg1HuYnSLJdVuZmRnNN2iOQ?e=VSU8AY"
    },
    {
        "id": 23,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DS Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EaRYTKQl1t1CvQHfbnE9HeYBY63lDitXAW86_HrVN3jCww?e=SfjYzC"
    },
    {
        "id": 24,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DS Mod - 4,5,6 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EbIzpzIDeDBMrE3jbQaNq0cBIBHB4kq-CLxibiVOush_hA?e=bbShKv"
    },
    {
        "id": 25,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSDS",
        "note": "DSGT Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EWsOnVw7UMpGlHUzYJnem8cBdO8FaWFRobzci32CYwUcbQ?e=NILJBl"
    },
    {
        "id": 26,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "OOPM",
        "note": "Module 1 - Java",
        "name": "By Prof. Vaishali Patil",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EcLmFBzPWx5OkdtSn4TeTAQBejI5oJXcl9S7Dhsjq6skow?e=JIdjyE"
    },
    {
        "id": 27,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths 3 GV Kumbhojkar",
        "name": "from Telegram",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES-T4iXGjeBFrXtrLKmnJXQBlBRvht5DACIW8lfOxO7ZJw?e=fIizJn"
    },
    {
        "id": 28,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 1",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EezU3p7lJepFsks7_t0tZSUB1kZmu_kvUYU6za-rw1L6ng?e=K9iHgS"
    },
    {
        "id": 29,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 2",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ec7pctViMAJDkgmx2Q431p8BzguvvU3gtyqrz2GWbB2hqg?e=G3GNkf"
    },
    {
        "id": 30,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 3",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EXe_Mr9UbfFPj2-sW-I5gZsB_kgAUC9BvE21iMuCzL79Hw?e=9cPqpe"
    },
    {
        "id": 31,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 4",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES_tiFG_cuRJk49ZtbBrUbkB6_ZMRo9twz0D6vltTiBvpw?e=DW90pB"
    },
    {
        "id": 32,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 5",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EUBb0PyBAqtLucfeLAzqgoEBpCfFKOEVCDx3gnScw3QiPw?e=jmOg36"
    },
    {
        "id": 33,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 6",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ER12BP7fpHNAqceYYdwjxwAB28_LMJuIzLzLQzOHcALicg?e=4wKxel"
    },
    {
        "id": 34,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "DS",
        "note": "DS Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EaRYTKQl1t1CvQHfbnE9HeYBY63lDitXAW86_HrVN3jCww?e=SfjYzC"
    },
    {
        "id": 35,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "DS",
        "note": "DS Mod - 4,5,6 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EbIzpzIDeDBMrE3jbQaNq0cBIBHB4kq-CLxibiVOush_hA?e=bbShKv"
    },
    {
        "id": 36,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "DSGT",
        "note": "DSGT Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EWsOnVw7UMpGlHUzYJnem8cBdO8FaWFRobzci32CYwUcbQ?e=NILJBl"
    },
    {
        "id": 37,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "DLCA",
        "note": "DLCA Mod -1,2  Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EcA1hqsxkqdPnVNZunSTSWgB125k18a8fhTECMfKcbno4w?e=9vduG6"
    },
    {
        "id": 38,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "DLCA",
        "note": "DLCA Mod - 3  Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Efe8AFMaSSdAqjMhTbbcYA8BaFAJtnPzmAokVE8bbRBKzg?e=gMXdAq"
    },
    {
        "id": 39,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "DBMS",
        "note": "DBMS mod 4,5,6",
        "name": "By Titiksha Bhavsar ",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EfLCxHFbwrdMtaY4kt7MNzMBwYX-OThT2t8S6TA1R-9pUw?e=tlIQPy"
    },
    {
        "id": 40,
        "department": "COMPS",
        "semester": "Sem3",
        "subject": "DBMS",
        "note": "DBMS456",
        "name": "Unknown",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EUX4yJZwnF1KpqV7Yn450isBpaUlM-a_YRAdK-uo_fUJJg?e=NUB4pV"
    }
];
export default allData;
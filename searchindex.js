Search.setIndex({"docnames": ["RevisionParcialFinalPart2", "intro"], "filenames": ["RevisionParcialFinalPart2.ipynb", "intro.md"], "titles": ["Punto modelo de clasificacion de fraude", "Welcome to your Jupyter Book"], "terms": {"revicion": 0, "y": 0, "correcion": 0, "parcial": 0, "final": 0, "machin": 0, "learn": 0, "part": 0, "2": 0, "presentado": 0, "por": 0, "cristian": 0, "colpa": 0, "import": 0, "warn": 0, "filterwarn": 0, "ignor": 0, "categori": 0, "futurewarn": 0, "deprecationwarn": 0, "runtimewarn": 0, "userwarn": 0, "joblib": 0, "panda": 0, "pd": 0, "matplotlib": 0, "pyplot": 0, "plt": 0, "numpi": 0, "np": 0, "seaborn": 0, "sn": 0, "scipi": 0, "sp": 0, "from": 0, "sklearn": 0, "model_select": 0, "train_test_split": 0, "neighbor": 0, "kneighborsclassifi": 0, "linear_model": 0, "ridgeclassifi": 0, "lasso": 0, "lassocv": 0, "logisticregress": 0, "naive_bay": 0, "gaussiannb": 0, "xgboost": 0, "xgbclassifi": 0, "xgb": 0, "svc": 0, "neural_network": 0, "mlpclassifi": 0, "metric": 0, "accuracy_scor": 0, "precision_scor": 0, "recall_scor": 0, "f1_score": 0, "roc_auc_scor": 0, "auc": 0, "confusion_matrix": 0, "roc_curv": 0, "preprocess": 0, "labelencod": 0, "standardscal": 0, "statsmodel": 0, "api": 0, "sm": 0, "stat": 0, "outliers_influ": 0, "variance_inflation_factor": 0, "classification_report": 0, "gridsearchcv": 0, "pipelin": 0, "utilizamo": 0, "una": 0, "funcion": 0, "denominada": 0, "resumet": 0, "extraida": 0, "kaggl": 0, "el": 0, "fin": 0, "poder": 0, "vizualizar": 0, "que": 0, "contienen": 0, "def": 0, "df": 0, "print": 0, "f": 0, "dataset": 0, "shape": 0, "summari": 0, "datafram": 0, "dtype": 0, "column": 0, "reset_index": 0, "name": 0, "index": 0, "miss": 0, "isnul": 0, "sum": 0, "valu": 0, "uniqu": 0, "nuniqu": 0, "first": 0, "loc": 0, "0": 0, "second": 0, "1": 0, "third": 0, "value_count": 0, "entropi": 0, "round": 0, "normal": 0, "true": 0, "base": 0, "return": 0, "importacion": 0, "alguna": 0, "libreria": 0, "fraudiden": 0, "read_csv": 0, "c": 0, "user": 0, "crist": 0, "onedr": 0, "escritorio": 0, "parcialmachinelearn": 0, "data": 0, "train_ident": 0, "csv": 0, "fraudtran": 0, "train_transact": 0, "en": 0, "esta": 0, "se": 0, "realiza": 0, "lectura": 0, "lo": 0, "do": 0, "entrenamiento": 0, "train": 0, "ident": 0, "transact": 0, "info": 0, "class": 0, "core": 0, "frame": 0, "rangeindex": 0, "144233": 0, "entri": 0, "144232": 0, "total": 0, "41": 0, "non": 0, "null": 0, "count": 0, "transactionid": 0, "int64": 0, "id_01": 0, "float64": 0, "id_02": 0, "140872": 0, "3": 0, "id_03": 0, "66324": 0, "4": 0, "id_04": 0, "5": 0, "id_05": 0, "136865": 0, "6": 0, "id_06": 0, "7": 0, "id_07": 0, "5155": 0, "8": 0, "id_08": 0, "9": 0, "id_09": 0, "74926": 0, "10": 0, "id_10": 0, "11": 0, "id_11": 0, "140978": 0, "12": 0, "id_12": 0, "object": 0, "13": 0, "id_13": 0, "127320": 0, "14": 0, "id_14": 0, "80044": 0, "15": 0, "id_15": 0, "140985": 0, "16": 0, "id_16": 0, "129340": 0, "17": 0, "id_17": 0, "139369": 0, "18": 0, "id_18": 0, "45113": 0, "19": 0, "id_19": 0, "139318": 0, "20": 0, "id_20": 0, "139261": 0, "21": 0, "id_21": 0, "5159": 0, "22": 0, "id_22": 0, "5169": 0, "23": 0, "id_23": 0, "24": 0, "id_24": 0, "4747": 0, "25": 0, "id_25": 0, "5132": 0, "26": 0, "id_26": 0, "5163": 0, "27": 0, "id_27": 0, "28": 0, "id_28": 0, "29": 0, "id_29": 0, "30": 0, "id_30": 0, "77565": 0, "31": 0, "id_31": 0, "140282": 0, "32": 0, "id_32": 0, "77586": 0, "33": 0, "id_33": 0, "73289": 0, "34": 0, "id_34": 0, "77805": 0, "35": 0, "id_35": 0, "36": 0, "id_36": 0, "37": 0, "id_37": 0, "38": 0, "id_38": 0, "39": 0, "devicetyp": 0, "140810": 0, "40": 0, "deviceinfo": 0, "118666": 0, "memori": 0, "usag": 0, "45": 0, "mb": 0, "590540": 0, "590539": 0, "394": 0, "v339": 0, "376": 0, "gb": 0, "pued": 0, "observar": 0, "est": 0, "existen": 0, "individual": 0, "como": 0, "id": 0, "pero": 0, "caso": 0, "ultimo": 0, "tien": 0, "extens": 0, "columna": 0, "llega": 0, "al": 0, "id38": 0, "transactiondt": 0, "productcd": 0, "card1": 0, "card2": 0, "card3": 0, "card4": 0, "card5": 0, "card6": 0, "addr1": 0, "addr2": 0, "dist1": 0, "dist2": 0, "p_emaildomain": 0, "r_emaildomain": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "c5": 0, "c6": 0, "c7": 0, "c8": 0, "c9": 0, "c10": 0, "c11": 0, "c12": 0, "c13": 0, "c14": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "d5": 0, "d6": 0, "d7": 0, "d8": 0, "d9": 0, "d10": 0, "d11": 0, "d12": 0, "d13": 0, "d14": 0, "d15": 0, "m1": 0, "m2": 0, "m3": 0, "m4": 0, "m5": 0, "m6": 0, "m7": 0, "m8": 0, "m9": 0, "v1": 0, "v2": 0, "v3": 0, "v4": 0, "v5": 0, "v6": 0, "v7": 0, "v8": 0, "v9": 0, "v10": 0, "v11": 0, "v12": 0, "v13": 0, "v14": 0, "v15": 0, "v16": 0, "v17": 0, "v18": 0, "v19": 0, "v20": 0, "v21": 0, "v22": 0, "v23": 0, "v24": 0, "v25": 0, "v26": 0, "v27": 0, "v28": 0, "v29": 0, "v30": 0, "v31": 0, "v32": 0, "v33": 0, "v34": 0, "v35": 0, "v36": 0, "v37": 0, "v38": 0, "v39": 0, "v40": 0, "v41": 0, "v42": 0, "v43": 0, "v44": 0, "v45": 0, "v46": 0, "v47": 0, "v48": 0, "v49": 0, "v50": 0, "v51": 0, "v52": 0, "v53": 0, "v54": 0, "v55": 0, "v56": 0, "v57": 0, "v58": 0, "v59": 0, "v60": 0, "v61": 0, "v62": 0, "v63": 0, "v64": 0, "v65": 0, "v66": 0, "v67": 0, "v68": 0, "v69": 0, "v70": 0, "v71": 0, "v72": 0, "v73": 0, "v74": 0, "v75": 0, "v76": 0, "v77": 0, "v78": 0, "v79": 0, "v80": 0, "v81": 0, "v82": 0, "v83": 0, "v84": 0, "v85": 0, "v86": 0, "v87": 0, "v88": 0, "v89": 0, "v90": 0, "v91": 0, "v92": 0, "v93": 0, "v94": 0, "v95": 0, "v96": 0, "v97": 0, "v98": 0, "v99": 0, "v100": 0, "v101": 0, "v102": 0, "v103": 0, "v104": 0, "v105": 0, "v106": 0, "v107": 0, "v108": 0, "v109": 0, "v110": 0, "v111": 0, "v112": 0, "v113": 0, "v114": 0, "v115": 0, "v116": 0, "v117": 0, "v118": 0, "v119": 0, "v120": 0, "v121": 0, "v122": 0, "v123": 0, "v124": 0, "v125": 0, "v126": 0, "v127": 0, "v128": 0, "v129": 0, "v130": 0, "v131": 0, "v132": 0, "v133": 0, "v134": 0, "v135": 0, "v136": 0, "v137": 0, "v138": 0, "v139": 0, "v140": 0, "v141": 0, "v142": 0, "v143": 0, "v144": 0, "v145": 0, "v146": 0, "v147": 0, "v148": 0, "v149": 0, "v150": 0, "v151": 0, "v152": 0, "v153": 0, "v154": 0, "v155": 0, "v156": 0, "v157": 0, "v158": 0, "v159": 0, "v160": 0, "v161": 0, "v162": 0, "v163": 0, "v164": 0, "v165": 0, "v166": 0, "v167": 0, "v168": 0, "v169": 0, "v170": 0, "v171": 0, "v172": 0, "v173": 0, "v174": 0, "v175": 0, "v176": 0, "v177": 0, "v178": 0, "v179": 0, "v180": 0, "v181": 0, "v182": 0, "v183": 0, "v184": 0, "v185": 0, "v186": 0, "v187": 0, "v188": 0, "v189": 0, "v190": 0, "v191": 0, "v192": 0, "v193": 0, "v194": 0, "v195": 0, "v196": 0, "v197": 0, "v198": 0, "v199": 0, "v200": 0, "v201": 0, "v202": 0, "v203": 0, "v204": 0, "v205": 0, "v206": 0, "v207": 0, "v208": 0, "v209": 0, "v210": 0, "v211": 0, "v212": 0, "v213": 0, "v214": 0, "v215": 0, "v216": 0, "v217": 0, "v218": 0, "v219": 0, "v220": 0, "v221": 0, "v222": 0, "v223": 0, "v224": 0, "v225": 0, "v226": 0, "v227": 0, "v228": 0, "v229": 0, "v230": 0, "v231": 0, "v232": 0, "v233": 0, "v234": 0, "v235": 0, "v236": 0, "v237": 0, "v238": 0, "v239": 0, "v240": 0, "v241": 0, "v242": 0, "v243": 0, "v244": 0, "v245": 0, "v246": 0, "v247": 0, "v248": 0, "v249": 0, "v250": 0, "v251": 0, "v252": 0, "v253": 0, "v254": 0, "v255": 0, "v256": 0, "v257": 0, "v258": 0, "v259": 0, "v260": 0, "v261": 0, "v262": 0, "v263": 0, "v264": 0, "v265": 0, "v266": 0, "v267": 0, "v268": 0, "v269": 0, "v270": 0, "v271": 0, "v272": 0, "v273": 0, "v274": 0, "v275": 0, "v276": 0, "v277": 0, "v278": 0, "v279": 0, "v280": 0, "v281": 0, "v282": 0, "v283": 0, "v284": 0, "v285": 0, "v286": 0, "v287": 0, "v288": 0, "v289": 0, "v290": 0, "v291": 0, "v292": 0, "v293": 0, "v294": 0, "v295": 0, "v296": 0, "v297": 0, "v298": 0, "v299": 0, "v300": 0, "v301": 0, "v302": 0, "v303": 0, "v304": 0, "v305": 0, "v306": 0, "v307": 0, "v308": 0, "v309": 0, "v310": 0, "v311": 0, "v312": 0, "v313": 0, "v314": 0, "v315": 0, "v316": 0, "v317": 0, "v318": 0, "v319": 0, "v320": 0, "v321": 0, "v322": 0, "v323": 0, "v324": 0, "v325": 0, "v326": 0, "v327": 0, "v328": 0, "v329": 0, "v330": 0, "v331": 0, "v332": 0, "v333": 0, "v334": 0, "v335": 0, "v336": 0, "v337": 0, "v338": 0, "tambien": 0, "contien": 0, "aparentement": 0, "son": 0, "independient": 0, "adrr": 0, "dist": 0, "d": 0, "v": 0, "repiten": 0, "varia": 0, "vece": 0, "cual": 0, "seria": 0, "bueno": 0, "mirar": 0, "ahora": 0, "realizar": 0, "union": 0, "nuevo": 0, "partir": 0, "cada": 0, "fraudmer": 0, "merg": 0, "how": [0, 1], "left": 0, "unir": 0, "ver": 0, "ambo": 0, "datset": 0, "2987000": 0, "86400": 0, "68": 0, "50": 0, "w": 0, "13926": 0, "150": 0, "discov": 0, "142": 0, "2987001": 0, "86401": 0, "00": 0, "2755": 0, "404": 0, "mastercard": 0, "102": 0, "2987002": 0, "86469": 0, "59": 0, "4663": 0, "490": 0, "visa": 0, "166": 0, "2987003": 0, "86499": 0, "18132": 0, "567": 0, "117": 0, "2987004": 0, "86506": 0, "h": 0, "4497": 0, "514": 0, "samsung": 0, "browser": 0, "2220x1080": 0, "match_statu": 0, "t": 0, "mobil": 0, "g892a": 0, "build": 0, "nrd90m": 0, "590535": 0, "3577535": 0, "15811047": 0, "49": 0, "6550": 0, "226": 0, "590536": 0, "3577536": 0, "15811049": 0, "10444": 0, "225": 0, "224": 0, "590537": 0, "3577537": 0, "15811079": 0, "95": 0, "12037": 0, "595": 0, "590538": 0, "3577538": 0, "15811088": 0, "7826": 0, "481": 0, "3577539": 0, "15811131": 0, "279": 0, "15066": 0, "170": 0, "row": 0, "434": 0, "tenemo": 0, "unido": 0, "notar": 0, "vacio": 0, "interesant": 0, "cantidad": 0, "faltant": 0, "449555": 0, "449730": 0, "471874": 0, "length": 0, "aunqu": 0, "arrojen": 0, "todo": 0, "tienen": 0, "alrededor": 0, "90": 0, "399": 0, "realizo": 0, "mergu": 0, "numerica": 0, "entera": 0, "tipo": 0, "texto": 0, "573349": 0, "20902": 0, "1786": 0, "abajo": 0, "realizara": 0, "primero": 0, "un": 0, "revisando": 0, "parec": 0, "repeticion": 0, "luego": 0, "aquello": 0, "si": 0, "aquella": 0, "pareciera": 0, "tuvieran": 0, "entr": 0, "94456": 0, "gmail": 0, "com": 0, "outlook": 0, "453249": 0, "60": 0, "76": 0, "97": 0, "unico": 0, "serian": 0, "seri": 0, "figur": 0, "figsiz": 0, "subplot": 0, "221": 0, "g": 0, "distplot": 0, "1000": 0, "set_titl": 0, "distribucion": 0, "transaccion": 0, "set_xlabel": 0, "set_ylabel": 0, "probabl": 0, "text": 0, "tendencia": 0, "distribuci\u00f3n": 0, "izquierda": 0, "dond": 0, "mayor\u00eda": 0, "compra": 0, "encuentran": 0, "rango": 0, "200": 0, "d\u00f3lare": 0, "medida": 0, "aumenta": 0, "costo": 0, "transacci\u00f3n": 0, "n\u00famero": 0, "va": 0, "disminuyendo": 0, "adem\u00e1": 0, "peque\u00f1o": 0, "repunt": 0, "569877": 0, "20663": 0, "describ": 0, "000000": 0, "mean": 0, "034990": 0, "std": 0, "183755": 0, "min": 0, "75": 0, "max": 0, "titl": 0, "distribut": 0, "countplot": 0, "x": 0, "xlabel": 0, "NO": 0, "ye": 0, "ylabel": 0, "frequenc": 0, "show": [0, 1], "exist": 0, "gran": 0, "desbal": 0, "meno": 0, "detecto": 0, "cometi\u00f3": 0, "siendo": 0, "indicado": 0, "439670": 0, "68519": 0, "r": 0, "37699": 0, "33024": 0, "s": 0, "11628": 0, "top": 0, "freq": 0, "m\u00e1": 0, "realizada": 0, "fue": 0, "seguido": 0, "desd": 0, "marguen": 0, "mantien": 0, "frecuencia": 0, "cercana": 0, "resto": 0, "cd": 0, "crosstab": 0, "plot": 0, "kind": 0, "bar": 0, "stack": 0, "fals": 0, "etiqueta": 0, "codificado": 0, "gr\u00e1fico": 0, "barra": 0, "agrupada": 0, "tarjeta": 0, "cruzado": 0, "es": 0, "curioso": 0, "producto": 0, "pesar": 0, "ser": 0, "mucho": 0, "tuvieron": 0, "parecida": 0, "posibilidad": 0, "sea": 0, "entraremo": 0, "segun": 0, "van": 0, "13553": 0, "8933": 0, "500": 0, "1565": 0, "114": 0, "1577": 0, "09": 0, "4259": 0, "119": 0, "66": 0, "1571": 0, "credit": 0, "debit": 0, "82": 0, "nota": 0, "existencia": 0, "vac\u00edo": 0, "toda": 0, "mantienen": 0, "cierto": 0, "car\u00e1cter": 0, "\u00fanico": 0, "especi": 0, "inter\u00e9": 0, "refieren": 0, "respectivament": 0, "m\u00e9todo": 0, "pago": 0, "ella": 0, "7919": 0, "14932": 0, "9500": 0, "14162": 0, "15885": 0, "10361": 0, "17188": 0, "10344": 0, "7945": 0, "17084": 0, "14620": 0, "11440": 0, "13231": 0, "18038": 0, "9898": 0, "734658": 0, "4901": 0, "170153": 0, "6019": 0, "9678": 0, "14184": 0, "18396": 0, "413": 0, "color": 0, "purpl": 0, "kde": 0, "label": 0, "nofraud": 0, "legend": 0, "target": 0, "fontsiz": 0, "mayor": 0, "margen": 0, "encuentra": 0, "valor": 0, "cerca": 0, "10000": 0, "informaci\u00f3n": 0, "hace": 0, "cierta": 0, "tambi\u00e9n": 0, "distribuida": 0, "321": 0, "48935": 0, "111": 0, "45191": 0, "555": 0, "41995": 0, "38145": 0, "583": 0, "21803": 0, "388": 0, "153": 0, "557": 0, "473": 0, "582": 0, "581607": 0, "362": 0, "555488": 0, "157": 0, "793246": 0, "100": 0, "214": 0, "361": 0, "512": 0, "600": 0, "g2": 0, "enfocado": 0, "as\u00ed": 0, "cometieron": 0, "debajo": 0, "esto": 0, "521287": 0, "185": 0, "56346": 0, "106": 0, "144": 0, "1252": 0, "146": 0, "199": 0, "209": 0, "173": 0, "588975": 0, "194925": 0, "336444": 0, "231": 0, "g3": 0, "aqu\u00ed": 0, "pertenecient": 0, "mui": 0, "segada": 0, "valuecount": 0, "vario": 0, "seg\u00fan": 0, "muestra": 0, "gr\u00e1fica": 0, "solament": 0, "384767": 0, "189217": 0, "american": 0, "express": 0, "8328": 0, "6651": 0, "588963": 0, "utilizada": 0, "ma": 0, "plot4": 0, "coherent": 0, "boxplot": 0, "hue": 0, "2000": 0, "add": 0, "acuerdo": 0, "296546": 0, "81513": 0, "57140": 0, "29105": 0, "25941": 0, "167": 0, "115": 0, "165": 0, "234": 0, "586281": 0, "278897": 0, "244453": 0, "237": 0, "teniendo": 0, "cuenta": 0, "igual": 0, "suced": 0, "parecieran": 0, "estrictament": 0, "sino": 0, "forma": 0, "439938": 0, "148986": 0, "charg": 0, "debido": 0, "588969": 0, "plot6": 0, "A": 0, "diferencia": 0, "misma": 0, "deteccion": 0, "podria": 0, "decir": 0, "tasa": 0, "aparicion": 0, "dt": 0, "fecha": 0, "codificada": 0, "observa": 0, "relacion": 0, "dia": 0, "especifico": 0, "comet": 0, "acto": 0, "relacionado": 0, "fuera": 0, "constant": 0, "alto": 0, "228355": 0, "yahoo": 0, "100934": 0, "hotmail": 0, "45250": 0, "anonym": 0, "36998": 0, "aol": 0, "28289": 0, "comcast": 0, "net": 0, "7888": 0, "icloud": 0, "6267": 0, "5096": 0, "msn": 0, "4092": 0, "att": 0, "4033": 0, "live": 0, "3041": 0, "sbcglobal": 0, "2970": 0, "verizon": 0, "2705": 0, "ymail": 0, "2396": 0, "bellsouth": 0, "1909": 0, "mx": 0, "1543": 0, "me": 0, "1522": 0, "cox": 0, "1393": 0, "optonlin": 0, "1011": 0, "charter": 0, "816": 0, "749": 0, "rocketmail": 0, "664": 0, "mail": 0, "559": 0, "earthlink": 0, "496": 0, "438": 0, "mac": 0, "436": 0, "juno": 0, "322": 0, "aim": 0, "315": 0, "305": 0, "roadrunn": 0, "windstream": 0, "fr": 0, "295": 0, "frontier": 0, "280": 0, "embarqmail": 0, "260": 0, "web": 0, "240": 0, "netzero": 0, "230": 0, "twc": 0, "prodigi": 0, "207": 0, "centurylink": 0, "205": 0, "196": 0, "frontiernet": 0, "195": 0, "q": 0, "189": 0, "suddenlink": 0, "175": 0, "cfl": 0, "rr": 0, "172": 0, "sc": 0, "164": 0, "cableon": 0, "159": 0, "gmx": 0, "149": 0, "143": 0, "134": 0, "co": 0, "uk": 0, "112": 0, "protonmail": 0, "74": 0, "ptd": 0, "56": 0, "43": 0, "servicio": 0, "ta": 0, "jp": 0, "496084": 0, "palett": 0, "pastel": 0, "correo": 0, "conteo": 0, "xtick": 0, "rotat": 0, "mayoria": 0, "usuario": 0, "usaron": 0, "asi": 0, "adema": 0, "realizaron": 0, "57147": 0, "27509": 0, "20529": 0, "11842": 0, "3701": 0, "2507": 0, "1812": 0, "1508": 0, "1398": 0, "852": 0, "762": 0, "754": 0, "620": 0, "556": 0, "552": 0, "459": 0, "433": 0, "430": 0, "422": 0, "293": 0, "292": 0, "218": 0, "187": 0, "147": 0, "137": 0, "127": 0, "122": 0, "105": 0, "79": 0, "69": 0, "scranton": 0, "edu": 0, "63": 0, "57": 0, "55": 0, "53": 0, "52": 0, "47": 0, "42": 0, "137291": 0, "repit": 0, "cometen": 0, "porcentaj": 0, "dominio": 0, "denomidano": 0, "parecen": 0, "relacionada": 0, "segunda": 0, "desktop": 0, "85165": 0, "55645": 0, "card4p": 0, "ax": 0, "set_xticklabel": 0, "mismo": 0, "encontrar": 0, "parecido": 0, "dispositivo": 0, "m\u00f3vile": 0, "aparici\u00f3n": 0, "devic": 0, "window": 0, "47722": 0, "io": 0, "19782": 0, "maco": 0, "12573": 0, "trident": 0, "7440": 0, "rv": 0, "1901": 0, "lgms345": 0, "verykool": 0, "xt1072": 0, "lg": 0, "h931": 0, "0pja2": 0, "menciono": 0, "arriba": 0, "analizar": 0, "coger": 0, "inicio": 0, "otra": 0, "mitad": 0, "conoc": 0, "comienzan": 0, "estar": 0, "numero": 0, "o": 0, "manejan": 0, "1657": 0, "72": 0, "1216": 0, "04": 0, "1260": 0, "319": 0, "06": 0, "1328": 0, "1103": 0, "71": 0, "1253": 0, "62": 0, "1199": 0, "1108": 0, "67": 0, "316791": 0, "105071": 0, "51315": 0, "28845": 0, "17922": 0, "3433": 0, "3434": 0, "3435": 0, "3436": 0, "1500": 0, "1269": 0, "641": 0, "280797": 0, "262878": 0, "649": 0, "517353": 0, "829": 0, "515614": 0, "12353": 0, "76022": 0, "818": 0, "525823": 0, "635": 0, "70": 0, "528588": 0, "577": 0, "528353": 0, "802": 0, "89113": 0, "859": 0, "88": 0, "imagen": 0, "sigu": 0, "latendencia": 0, "acumula": 0, "271100": 0, "281444": 0, "m0": 0, "350482": 0, "99": 0, "169360": 0, "346265": 0, "346252": 0, "m": 0, "important": 0, "alparec": 0, "alredor": 0, "279287": 0, "314": 0, "870": 0, "1285": 0, "73": 0, "450909": 0, "965": 0, "450721": 0, "46": 0, "94": 0, "2836": 0, "449124": 0, "508189": 0, "334": 0, "pertenecen": 0, "conjunto": 0, "siguen": 0, "hai": 0, "le": 0, "faltan": 0, "darl": 0, "manejo": 0, "adelant": 0, "missing_percentag": 0, "len": 0, "missing_data_info": 0, "214888": 0, "86": 0, "054967": 0, "323534": 0, "355370": 0, "missing_data": 0, "registro": 0, "cort": 0, "sort_valu": 0, "ascend": 0, "columns_to_drop": 0, "fraudmer2": 0, "drop": 0, "eliminamo": 0, "cuyo": 0, "equivalen": 0, "su": 0, "135": 0, "1404": 0, "790": 0, "950001": 0, "317": 0, "500000": 0, "669": 0, "2234": 0, "950012": 0, "pasamo": 0, "tener": 0, "403": 0, "cuando": 0, "arrai": 0, "creamo": 0, "saber": 0, "quedaron": 0, "despu": 0, "eliminar": 0, "igualment": 0, "consider": 0, "reazlizar": 0, "limpieza": 0, "grade": 0, "1018": 0, "axi": 0, "lbl": 0, "fit": 0, "list": 0, "transform": 0, "convertimo": 0, "float": 0, "realizamo": 0, "eliminada": 0, "comparar": 0, "score": 0, "corr_matrix": 0, "corr": 0, "ab": 0, "upper": 0, "where": 0, "triu": 0, "ones": 0, "k": 0, "astyp": 0, "bool": 0, "to_drop": 0, "ani": [0, 1], "80": 0, "92": 0, "considerablement": 0, "menor": 0, "quedamo": 0, "fila": 0, "eliminaron": 0, "tenian": 0, "vacia": 0, "fueron": 0, "rellenado": 0, "probar": 0, "cuentan": 0, "falta": 0, "pue": 0, "suministrada": 0, "llegado": 0, "estuviera": 0, "llena": 0, "escrita": 0, "df_clean": 0, "dropna": 0, "vaci": 0, "2987009": 0, "17399": 0, "2987035": 0, "107": 0, "9766": 0, "360": 0, "2987036": 0, "77": 0, "4806": 0, "2987045": 0, "16132": 0, "51": 0, "2987051": 0, "7835": 0, "590520": 0, "3577520": 0, "93": 0, "17150": 0, "590522": 0, "3577522": 0, "54": 0, "3166": 0, "590525": 0, "3577525": 0, "11942": 0, "570": 0, "590533": 0, "3577533": 0, "13071": 0, "495": 0, "2956": 0, "949997": 0, "128590": 0, "llegaron": 0, "adecuado": 0, "eliminacion": 0, "eliminan": 0, "nos": 0, "40737": 0, "habian": 0, "anteriorment": 0, "buena": 0, "idea": 0, "n": 0, "utilizar": 0, "column_median": 0, "median": 0, "fillna": 0, "continuacion": 0, "probramo": 0, "obten": 0, "preccis": 0, "recal": 0, "f1": 0, "matriz": 0, "confus": 0, "curva": 0, "roc": 0, "alguno": 0, "llegu": 0, "aplicar": 0, "leyendo": 0, "documentacion": 0, "ayuda": 0, "reducir": 0, "gasto": 0, "computacion": 0, "uso": 0, "recurso": 0, "afecta": 0, "puntuacion": 0, "mejor": 0, "parametro": 0, "tal": 0, "hizo": 0, "comparacion": 0, "tun": 0, "sin": 0, "unica": 0, "excepcion": 0, "solo": 0, "descripcion": 0, "observado": 0, "finalizar": 0, "x_train_": 0, "x_test_": 0, "y_train_": 0, "y_test_": 0, "random_st": 0, "123": 0, "test_siz": 0, "svm_model": 0, "kernel": 0, "linear": 0, "max_it": 0, "xb_model": 0, "knn_model": 0, "nb_model": 0, "mlp_classifi": 0, "hidden_layer_s": 0, "lasso_classifi": 0, "penalti": 0, "l1": 0, "solver": 0, "liblinear": 0, "ridge_classifi": 0, "alpha": 0, "y_pred": 0, "predict": 0, "y_probsvm": 0, "predict_proba": 0, "precis": 0, "support": 0, "113961": 0, "07": 0, "4147": 0, "accuraci": 0, "118108": 0, "macro": 0, "avg": 0, "weight": 0, "svmauc_scor": 0, "47785357348156965": 0, "definir": 0, "grilla": 0, "hiperpar\u00e1metro": 0, "desea": 0, "explorar": 0, "param_grid": 0, "regularizaci\u00f3n": 0, "rbf": 0, "poli": 0, "degre": 0, "gamma": 0, "scale": 0, "auto": 0, "coeficient": 0, "crear": 0, "objeto": 0, "buscar": 0, "grid_search": 0, "estim": 0, "cv": 0, "n_job": 0, "ajustar": 0, "utilizando": 0, "grid": 0, "search": 0, "x27": 0, "In": 0, "jupyt": 0, "environ": 0, "pleas": 0, "rerun": 0, "thi": [0, 1], "cell": 0, "html": 0, "represent": 0, "trust": 0, "notebook": 0, "On": 0, "github": 0, "unabl": 0, "render": 0, "try": 0, "load": 0, "page": [0, 1], "nbviewer": 0, "org": 0, "gridsearchcvgridsearchcv": 0, "svcsvc": 0, "best_svm_model": 0, "best_estimator_": 0, "imprimir": 0, "report": 0, "clasificaci\u00f3n": 0, "prueba": 0, "y_pred_svm_t": 0, "digit": 0, "96597": 0, "59650": 0, "73755": 0, "03670": 0, "42247": 0, "06754": 0, "59039": 0, "50133": 0, "50949": 0, "40255": 0, "93334": 0, "71403": 0, "cm_svm": 0, "heatmap": 0, "annot": 0, "fmt": 0, "cmap": 0, "blue": 0, "cbar": 0, "annot_kw": 0, "size": 0, "squar": 0, "xticklabel": 0, "No": 0, "yticklabel": 0, "confusi\u00f3n": 0, "cnn": 0, "pca": 0, "rightarrow": 0, "knn": 0, "5205556331658456": 0, "obt\u00e9n": 0, "probabilidad": 0, "predicci\u00f3n": 0, "clase": 0, "positiva": 0, "y_prob_svm_t": 0, "calcula": 0, "\u00e1rea": 0, "bajo": 0, "fpr_svm": 0, "tpr_svm": 0, "_": 0, "roc_auc_svm": 0, "grafica": 0, "darkorang": 0, "lw": 0, "curv": 0, "2f": 0, "navi": 0, "linestyl": 0, "xlim": 0, "ylim": 0, "05": 0, "posit": 0, "rate": 0, "lower": 0, "right": 0, "y_probxb": 0, "98": 0, "58": 0, "aucxb": 0, "9283286192355811": 0, "param_grid_xb": 0, "n_estim": 0, "110": 0, "130": 0, "estimador": 0, "learning_r": 0, "001": 0, "max_depth": 0, "xb_model_gb": 0, "grid_search_xb": 0, "base_scor": 0, "none": 0, "booster": 0, "callback": 0, "colsample_bylevel": 0, "colsample_bynod": 0, "colsample_bytre": 0, "early_stopping_round": 0, "enable_categor": 0, "eval_metr": 0, "feature_typ": 0, "grow_polici": 0, "importance_typ": 0, "interaction_constraint": 0, "max_cat_threshold": 0, "max_cat_to_onehot": 0, "max_delta_step": 0, "max_leav": 0, "min_child_weight": 0, "monotone_constraint": 0, "multi_strategi": 0, "num_parallel_tre": 0, "xgbclassifierxgbclassifi": 0, "max_bin": 0, "best_xb_model": 0, "y_pred_xb_t": 0, "98167": 0, "99843": 0, "98998": 0, "91867": 0, "48758": 0, "63705": 0, "98049": 0, "95017": 0, "74301": 0, "81351": 0, "97945": 0, "97758": 0, "cm_xb_": 0, "xbauc_scor": 0, "9477680724041774": 0, "y_prob_xb_t": 0, "fpr_xb": 0, "tpr_xb": 0, "roc_auc_xb": 0, "mlp": 0, "y_probmlp": 0, "96": 0, "48": 0, "mlp_score": 0, "canalizaci\u00f3n": 0, "escalado": 0, "clasificador": 0, "scaler": 0, "caracter\u00edstica": 0, "mlp__hidden_layer_s": 0, "mlp__activ": 0, "relu": 0, "logist": 0, "mlp__alpha": 0, "0001": 0, "01": 0, "mlp__max_it": 0, "best_mlp_model": 0, "step": 0, "pipelinepipelin": 0, "standardscalerstandardscal": 0, "mlpclassifiermlpclassifi": 0, "y_pred_mlp_t": 0, "97567": 0, "99669": 0, "98607": 0, "77719": 0, "31710": 0, "45042": 0, "97283": 0, "87643": 0, "65689": 0, "71825": 0, "96870": 0, "96726": 0, "cm_mlp": 0, "mlpauc_scor": 0, "8676742637072078": 0, "y_prob_mlp_t": 0, "fpr_mlp": 0, "tpr_mlp": 0, "roc_auc_mlp": 0, "knn_pipelin": 0, "agrega": 0, "escalador": 0, "necesario": 0, "param_grid_knn": 0, "n_neighbor": 0, "vecino": 0, "uniform": 0, "distanc": 0, "algorithm": 0, "ball_tre": 0, "kd_tree": 0, "brute": 0, "knn_model_": 0, "grid_search_knn": 0, "verbos": 0, "fold": 0, "each": 0, "candid": 0, "160": 0, "kneighborsclassifierkneighborsclassifi": 0, "best_knn_model": 0, "y_pred_knn_t": 0, "y_probknn": 0, "97267": 0, "99808": 0, "98521": 0, "81282": 0, "22932": 0, "35772": 0, "97109": 0, "89274": 0, "61370": 0, "67147": 0, "96706": 0, "96318": 0, "cm_knn_": 0, "knnauc_scor": 0, "7440888768171331": 0, "y_prob_knn_t": 0, "fpr_knn": 0, "tpr_knn": 0, "roc_auc_knn": 0, "44": 0, "7219557311907417": 0, "naiv": 0, "bay": 0, "y_probnb": 0, "nbauc_scor": 0, "nb": 0, "7098196799764396": 0, "param_grid_nb": 0, "var_smooth": 0, "1e": 0, "nb_model_": 0, "grid_search_nb": 0, "08": 0, "gaussiannbgaussiannb": 0, "best_nb_model": 0, "y_pred_nb_t": 0, "96612": 0, "98175": 0, "97387": 0, "09722": 0, "05401": 0, "06945": 0, "94917": 0, "53167": 0, "51788": 0, "52166": 0, "93561": 0, "94212": 0, "cm_nb_": 0, "6505553872688545": 0, "y_prob_nb_t": 0, "fpr_nb": 0, "tpr_nb": 0, "da": 0, "error": 0, "tabla": 0, "utilizars": 0, "problema": 0, "usamo": 0, "compart": 0, "caracteristica": 0, "y_probla": 0, "78": 0, "87": 0, "laauc_scor": 0, "8057411189834895": 0, "inversa": 0, "fuerza": 0, "fit_intercept": 0, "opci\u00f3n": 0, "intercepci\u00f3n": 0, "regresi\u00f3n": 0, "log\u00edstica": 0, "logistic_model": 0, "best_logistic_model": 0, "y_pred_logistic_t": 0, "96489": 0, "99982": 0, "98205": 0, "04762": 0, "00024": 0, "00048": 0, "96473": 0, "50625": 0, "50003": 0, "49126": 0, "93268": 0, "94758": 0, "logisticregressionlogisticregress": 0, "cm_lr": 0, "lry_scor": 0, "decision_funct": 0, "fprlr": 0, "tprlr": 0, "y_score": 0, "roc_auc": 0, "supongamo": 0, "definido": 0, "previament": 0, "svd": 0, "choleski": 0, "ridge_model": 0, "best_ridge_model": 0, "y_pred_ridge_t": 0, "96654": 0, "99968": 0, "98283": 0, "84937": 0, "04895": 0, "09257": 0, "96630": 0, "90796": 0, "52432": 0, "53770": 0, "96243": 0, "95157": 0, "cm_ridg": 0, "fpr": 0, "tpr": 0, "ejercicio": 0, "tuvo": 0, "precisi\u00f3n": 0, "tanto": 0, "mientra": 0, "respectiva": 0, "justificaci\u00f3n": 0, "tuve": 0, "limitar": 0, "interaccion": 0, "nodo": 0, "algoritmo": 0, "durar": 0, "hora": 0, "llegar": 0, "acabar": 0, "puse": 0, "par\u00e1metro": 0, "e": 0, "duraron": 0, "tiempo": 0, "dur\u00f3": 0, "terminar": 0, "m\u00e1ximo": 0, "interacci\u00f3n": 0, "minuto": 0, "suport": 0, "vector": 0, "durando": 0, "pasaron": 0, "baja": 0, "pasar": 0, "mejora": 0, "poco": 0, "notoria": 0, "paso": 0, "puntuaci\u00f3n": 0, "ejemplo": 0, "origin": 0, "tra": 0, "temer": 0, "otro": 0, "mejoren": 0, "manera": 0, "significativa": 0, "gener": 0, "ejecutado": 0, "utilizo": 0, "regresor": 0, "vez": 0, "producia": 0, "diria": 0, "extensa": 0, "denominda": 0, "cxx": 0, "dxx": 0, "sobr": 0, "vxx": 0, "ayudaria": 0, "mejorar": 0, "encontraban": 0, "300": 0, "afecto": 0, "negativament": 0, "exploratoria": 0, "segundo": 0, "windspe": 0, "wind": 0, "speed": 0, "data_treino_dv_df_2000_2010": 0, "utc": 0, "vento": 0, "dire\u00ef": 0, "\u00bd\u00ef": 0, "\u00bdo": 0, "horaria": 0, "gr": 0, "\u00ef": 0, "\u00bd": 0, "umidad": 0, "rel": 0, "na": 0, "ant": 0, "aut": 0, "temperatura": 0, "m\u00ef": 0, "\u00bdxima": 0, "\u00bdc": 0, "\u00bdnima": 0, "relativa": 0, "ar": 0, "pressao": 0, "atmosferica": 0, "ao": 0, "nivel": 0, "estacao": 0, "precipita\u00ef": 0, "hor\u00ef": 0, "\u00bdrio": 0, "mm": 0, "rajada": 0, "maxima": 0, "press\u00ef": 0, "809017": 0, "61": 0, "888": 0, "887": 0, "965926": 0, "891007": 0, "848048": 0, "224951": 0, "886": 0, "87688": 0, "615661": 0, "83": 0, "879": 0, "87689": 0, "469472": 0, "84": 0, "878": 0, "87690": 0, "484810": 0, "87691": 0, "85": 0, "880": 0, "87692": 0, "573576": 0, "881": 0, "87693": 0, "originalment": 0, "lenguaj": 0, "utilizado": 0, "espa\u00f1ol": 0, "estaria": 0, "bien": 0, "renombr": 0, "head": 0, "observan": 0, "str": 0, "replac": 0, "regex": 0, "condigo": 0, "cambiamo": 0, "formato": 0, "muestr": 0, "convertiremo": 0, "objetivo": 0, "df_clean2": 0, "anterior": 0, "llaman": 0, "renombrarla": 0, "graficacion": 0, "nombres_nuevo": 0, "direcci\u00f3n": 0, "horario": 0, "humedad": 0, "m\u00e1x": 0, "m\u00edn": 0, "presi\u00f3n": 0, "atmosf\u00e9rica": 0, "precipitaci\u00f3n": 0, "presiatmosmax": 0, "m\u00e1xima": 0, "r\u00e1faga": 0, "renam": 0, "inplac": 0, "506437": 0, "932300": 0, "405810": 0, "686247": 0, "156434": 0, "788011": 0, "970296": 0, "466192": 0, "313968": 0, "400000": 0, "058465": 0, "640222": 0, "176194": 0, "166336": 0, "64": 0, "921264": 0, "721386": 0, "200000": 0, "700000": 0, "684570": 0, "513744": 0, "100000": 0, "146682": 0, "992327": 0, "251925": 0, "012404": 0, "863": 0, "885": 0, "300000": 0, "889": 0, "1023": 0, "160907": 0, "307515": 0, "161076": 0, "311157": 0, "800000": 0, "580724": 0, "646750": 0, "865": 0, "600000": 0, "913": 0, "891093": 0, "564539": 0, "862": 0, "900000": 0, "910": 0, "ya": 0, "organizado": 0, "num_col": 0, "select_dtyp": 0, "includ": 0, "number": 0, "tolist": 0, "set": 0, "font_scal": 0, "col": 0, "skew": 0, "kurtosi": 0, "hist": 0, "89": 0, "179": 0, "65": 0, "476": 0, "02": 0, "91": 0, "sesgado": 0, "debida": 0, "miden": 0, "minimo": 0, "maximo": 0, "uno": 0, "direccion": 0, "derecha": 0, "fuert": 0, "disfrut": 0, "humano": 0, "respecto": 0, "deberian": 0, "opuesta": 0, "terminan": 0, "generando": 0, "alta": 0, "correlacion": 0, "evaluar": 0, "minima": 0, "dan": 0, "entend": 0, "mantuvieron": 0, "condicion": 0, "ambiental": 0, "relativament": 0, "establ": 0, "momento": 0, "dhico": 0, "precion": 0, "precipitacion": 0, "rafaga": 0, "presion": 0, "bastant": 0, "regplot": 0, "bivariado": 0, "scatter_regplot": 0, "strx": 0, "stry": 0, "scatter_color": 0, "regplot_color": 0, "lightpink": 0, "fig": 0, "sharei": 0, "scatterplot": 0, "regress": 0, "suptitl": 0, "relaci\u00f3n": 0, "remov": 0, "principalment": 0, "sera": 0, "ve": 0, "logra": 0, "grafico": 0, "evitar": 0, "overfit": 0, "resultado": 0, "similar": 0, "ello": 0, "varianc": 0, "inflat": 0, "factor": 0, "vif": 0, "vif_data": 0, "featur": 0, "i": 0, "rang": 0, "756670": 0, "764667": 0, "472214": 0, "1041": 0, "288556": 0, "873": 0, "592599": 0, "2458": 0, "166449": 0, "2040": 0, "043966": 0, "605": 0, "398786": 0, "239729": 0, "935606": 0, "166410": 0, "803252": 0, "948462": 0, "460794": 0, "969396": 0, "513182": 0, "732878": 0, "764655": 0, "472100": 0, "223639": 0, "872": 0, "675000": 0, "2433": 0, "989389": 0, "2019": 0, "894779": 0, "025952": 0, "221975": 0, "361285": 0, "165461": 0, "799789": 0, "222530": 0, "244342": 0, "729686": 0, "764260": 0, "462936": 0, "179234": 0, "655012": 0, "413757": 0, "770603": 0, "604": 0, "840542": 0, "164753": 0, "780160": 0, "168": 0, "716547": 0, "692848": 0, "752916": 0, "346132": 0, "483": 0, "338846": 0, "398": 0, "127100": 0, "975563": 0, "072686": 0, "146077": 0, "487909": 0, "087171": 0, "555548": 0, "743150": 0, "344828": 0, "359": 0, "693193": 0, "478535": 0, "370714": 0, "145611": 0, "466511": 0, "139": 0, "778996": 0, "484705": 0, "709306": 0, "806823": 0, "503967": 0, "257269": 0, "116221": 0, "886266": 0, "133": 0, "061080": 0, "468956": 0, "502811": 0, "742039": 0, "401121": 0, "914017": 0, "116128": 0, "881085": 0, "335222": 0, "484971": 0, "254167": 0, "373875": 0, "915692": 0, "042880": 0, "303058": 0, "455961": 0, "550451": 0, "050518": 0, "029911": 0, "kneighborsregressor": 0, "xgbregressor": 0, "svr": 0, "mlpregressor": 0, "mean_squared_error": 0, "r2_score": 0, "svm_modelr": 0, "xb_modelr": 0, "knn_modelr": 0, "nb_modelr": 0, "mlp_classifierr": 0, "lasso_classifierr": 0, "y_24": 0, "shift": 0, "y_48": 0, "y_72": 0, "y_96": 0, "y_120": 0, "120": 0, "x_train": 0, "x_test": 0, "y_train": 0, "y_test": 0, "model": 0, "mse": 0, "rmse": 0, "sqrt": 0, "r2": 0, "root": 0, "r\u00b2": 0, "26522386525835": 0, "124821703763912": 0, "2632309495934181": 0, "ridgeridg": 0, "ra\u00edz": 0, "cuadrada": 0, "4678156658832027": 0, "2115344262063719": 0, "1452570695037838": 0, "prediccion": 0, "eval\u00faa": 0, "548858051929018": 0, "244531257915613": 0, "09806421814426025": 0, "055014753804481": 0, "0271391112232466": 0, "3856405655399636": 0, "2741237215978": 0, "606654225484768": 0, "323": 0, "51358073828584": 0, "2841786683531768": 0, "1332160731092622": 0, "25219313038980407": 0, "small": 1, "sampl": 1, "give": 1, "you": 1, "feel": 1, "content": 1, "structur": 1, "It": 1, "off": 1, "few": 1, "major": 1, "file": 1, "type": 1, "well": 1, "some": 1, "doe": 1, "go": 1, "depth": 1, "particular": 1, "topic": 1, "check": 1, "out": 1, "document": 1, "more": 1, "inform": 1, "bundl": 1, "see": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"punto": 0, "modelo": 0, "de": 0, "clasificacion": 0, "fraud": 0, "eda": 0, "analisi": 0, "variabl": 0, "transactionamt": 0, "isfraud": 0, "informacion": 0, "la": 0, "card": 0, "analizi": 0, "dato": 0, "extenso": 0, "preparacion": 0, "utilizacion": 0, "mediana": 0, "para": 0, "rellenar": 0, "nan": 0, "svm": 0, "gridsearch": 0, "con": 0, "ridg": 0, "regres": 0, "velocidad": 0, "del": 0, "viento": 0, "welcom": 1, "your": 1, "jupyt": 1, "book": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})
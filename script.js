var firstData = new Date(2018, 1, 12);
var tableDates =
`G1 G2 G3 G4 G5
F 15 F 23 7
F F 15 23 7
F 23 15 F 7
7 23 15 F F
7 23 F F 15
7 F 23 F 15
7 F 23 F 15
F F 23 7 15
15 F 23 7 F
15 F F 7 23
15 7 F F 23
F 7 F 15 23
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 23 F
F 15 F 23 7
F F 15 23 7
F 23 15 F 7
F 23 15 F 7
7 23 15 F F
7 23 F F 15
7 F 23 F 15
F F 23 7 15
15 F 23 7 F
15 F F 7 23
15 F F 7 23
15 7 F F 23
F 7 F 15 23
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 23 F
F 15 7 23 F
F 15 F 23 7
F F 15 23 7
F 23 15 F 7
7 23 15 F F
7 23 F F 15
7 F 23 F 15
7 F 23 F 15
F F 23 7 15
15 F 23 7 F
15 F F 7 23
15 7 F F 23
F 7 F 15 23
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 23 F
F 15 F 23 7
F F 15 23 7
F 23 15 F 7
F 23 15 F 7
7 23 15 F F
7 23 F F 15
7 F 23 F 15
F F 23 7 15
15 F 23 7 F
15 F F 7 23
15 F F 7 23
15 7 F F 23
F 7 F 15 23
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 23 F
F 15 7 23 F
F 15 F 23 7
F F 15 23 7
F 23 15 F 7
7 23 15 F F
7 23 F F 15
7 F 23 F 15
7 F 23 F 15
F F 23 7 15
15 F 23 7 F
15 F F 7 23
15 7 F F 23
F 7 F 15 23
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 23 F
F 15 F 23 7
F F 15 23 7
F 23 15 F 7
F 23 15 F 7
7 23 15 F F
7 23 F F 15
7 F 23 F 15
F F 23 7 15
15 F 23 7 F
15 F F 7 23
15 F F 7 23
15 7 F F 23
F 7 F 15 23
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 23 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
23 15 7 F F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 F F 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F F 23 7 15
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15`;


Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  }

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
};

function DateToStringDataRefap(date) {
    return date.toLocaleDateString("pt", {
      day: "2-digit",
      month: 'short'
    }).replace(" de ", "/");
  }



var ElmTable = document.getElementById("tbMain")
// Cria tabela
tableDates.split("\n").map(function (objLinha, indiceLinha) {
    // InsereTR
    ElmTR = document.createElement("tr");
    ElmTR.classList.add("trTable");
    ElmTable.appendChild(ElmTR);
    ElmData = document.createElement("td");
    
    if (indiceLinha == 0) {
        ElmData.appendChild(document.createTextNode(" "));
        ElmTR.classList.add("trHead");
    } else {
        DateIndex = firstData.addDays(indiceLinha-1);
        // Add WeekdayClass
        ElmTR.classList.add("tr" + DateIndex.getDayName());
        
        strDataLista = DateToStringDataRefap(DateIndex);
        // If TODAY
        if (strDataLista == DateToStringDataRefap(new Date())) {
            ElmData.classList.add("tdToday");
        }
        
        ElmData.appendChild(document.createTextNode(strDataLista));
    }
    ElmData.classList.add("tdDate");
    ElmTR.appendChild(ElmData);

    objLinha.split(" ").map(function (objHoraDia, indiceHoraDia) {
        ElmHoraDia = document.createElement("td");
        ElmHoraDia.appendChild(document.createTextNode(objHoraDia));
        if (objHoraDia == "F") {
            ElmHoraDia.classList.add("tdF");
        }
        ElmTR.appendChild(ElmHoraDia); 
    });
});

window.scrollTo(0, document.getElementsByClassName("tdToday")[0].offsetTop - 45); 

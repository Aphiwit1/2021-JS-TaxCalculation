var totalIncome = 0
var netIncome = 0
var sso = 0
var incomeOther = 0
var taxDeductions = 0



function calculateMoney(value){
    if (value) {
        totalIncome = parseFloat(value) * 10
    } else {
        totalIncome = 0
    }
}

function social(value) {
    let salaryPerMonth = 0
    if (value == 'yes') {
        salaryPerMonth =  Math.floor(totalIncome/12)
        sso = (5/100) * salaryPerMonth
        if (sso > 750) {
            sso = 750
        }
        sso  = sso * 12
        document.getElementById('has-social-security').classList = 'btn-clicked'
    } else {
        sso = 0
        document.getElementById('no-social-security').classList = 'btn-clicked'
    }
}

function incomeOtherChannel(value) {
    console.log(value)
    if (value) {
        incomeOther = parseFloat(value) * 10
    } else {
        incomeOther = 0
    }
}

function taxDeduction(value) {
    if (value) {
        taxDeductions = parseFloat(value) * 10
    } else {
        taxDeductions = 0
    }
}

function startTaxCalculate() {

    let totalTax = 0
    let minus = (60000 + sso + taxDeductions)
    netIncome = (totalIncome  + incomeOther) - 100000 
    netIncome = netIncome - minus

    if (netIncome <= 150000) {
        document.getElementById("demo").innerHTML = "<span>รายได้(ทั้งปี)ของคุณ</span>" + totalIncome +  " บาท" + "<br>" +
                                                    "<span>หักค่าใช้จ่ายตามที่กฎหมายกำหนด </span>" + 100000 + " บาท" +"<br>" +
                                                    "<span>หักค่าลดหย่อยของตัวเอง </span>" + 60000  + " บาท" +"<br>" + 
                                                    "<span>หักค่าประกันสังคม(ทั้งปี) </span>" + sso + " บาท" +"<br>" + 
                                                    "<span>รายได้จากช่องทางอื่นๆ(ทั้งปี) </span>" + incomeOther + " บาท" +"<br>" + 
                                                    "<span>ค่าลดหย่อนอื่นๆ </span>" + taxDeductions + " บาท" + "<br>" + 
                                                    "<div>(สรุป) คุณไม่ต้องจ่ายภาษี เนื่องจากรายได้ยังไม่ถึงเกณฑ์ที่ต้องจ่าย</div>"
    } else if (netIncome <= 300000) {
        netIncome = netIncome - 150000
        totalTax = (5/100) * netIncome
        if (totalTax <= 0) {
            totalTax = 0
        }
        document.getElementById("demo").innerHTML =  "<span>รายได้(ทั้งปี)ของคุณ</span>" + totalIncome +  " บาท" + "<br>" +
        "<span>หักค่าใช้จ่ายตามที่กฎหมายกำหนด </span>" + 100000 + " บาท" +"<br>" +
        "<span>หักค่าลดหย่อยของตัวเอง </span>" + 60000  + " บาท" +"<br>" + 
        "<span>หักค่าประกันสังคม(ทั้งปี) </span>" + sso + " บาท" +"<br>" + 
        "<span>รายได้จากช่องทางอื่นๆ(ทั้งปี) </span>" + incomeOther + " บาท" +"<br>" + 
        "<span>ค่าลดหย่อนอื่นๆ </span>" + taxDeductions + " บาท" + "<br>" + 
        "<div>(สรุป) คุณต้องจ่ายภาษี " +  totalTax + " บาท </div>" 

    } else if (netIncome <= 500000) {
        netIncome = netIncome - 300000
        totalTax = (10/100) * netIncome

        //ภาษีทบต้นจากขึ้นที่สอง
        totalTax = totalTax + 7500

        if (totalTax <= 0) {
            totalTax = 0
        }
        document.getElementById("demo").innerHTML =  "<span>รายได้(ทั้งปี)ของคุณ</span>" + totalIncome +  " บาท" + "<br>" +
        "<span>หักค่าใช้จ่ายตามที่กฎหมายกำหนด </span>" + 100000 + " บาท" +"<br>" +
        "<span>หักค่าลดหย่อยของตัวเอง </span>" + 60000  + " บาท" +"<br>" + 
        "<span>หักค่าประกันสังคม(ทั้งปี) </span>" + sso + " บาท" +"<br>" + 
        "<span>รายได้จากช่องทางอื่นๆ(ทั้งปี) </span>" + incomeOther + " บาท" +"<br>" + 
        "<span>ค่าลดหย่อนอื่นๆ </span>" + taxDeductions + " บาท" + "<br>" + 
        "<div>(สรุป) คุณต้องจ่ายภาษี " +  totalTax + " บาท </div>" 


    } else if (netIncome <= 750000) {
        netIncome = netIncome - 500000
        totalTax = (15/100) * netIncome

        //ภาษีทบต้นจากขึ้นที่สาม
        totalTax = totalTax + 27500

        if (totalTax <= 0) {
            totalTax = 0
        }
        document.getElementById("demo").innerHTML =  "<span>รายได้(ทั้งปี)ของคุณ</span>" + totalIncome +  " บาท" + "<br>" +
        "<span>หักค่าใช้จ่ายตามที่กฎหมายกำหนด </span>" + 100000 + " บาท" +"<br>" +
        "<span>หักค่าลดหย่อยของตัวเอง </span>" + 60000  + " บาท" +"<br>" + 
        "<span>หักค่าประกันสังคม(ทั้งปี) </span>" + sso + " บาท" +"<br>" + 
        "<span>รายได้จากช่องทางอื่นๆ(ทั้งปี) </span>" + incomeOther + " บาท" +"<br>" + 
        "<span>ค่าลดหย่อนอื่นๆ </span>" + taxDeductions + " บาท" + "<br>" + 
        "<div>(สรุป) คุณต้องจ่ายภาษี " +  totalTax + " บาท </div>" 

    } else if (netIncome <= 1000000) {
        netIncome = netIncome - 750000
        totalTax = (20/100) * netIncome
        totalTax = totalTax + 65000

        //ภาษีทบต้นจากขึ้นที่สาม
        totalTax = totalTax + 65000

        if (totalTax <= 0) {
            totalTax = 0
        }

        document.getElementById("demo").innerHTML =  "<span>รายได้(ทั้งปี)ของคุณ</span>" + totalIncome +  " บาท" + "<br>" +
        "<span>หักค่าใช้จ่ายตามที่กฎหมายกำหนด </span>" + 100000 + " บาท" +"<br>" +
        "<span>หักค่าลดหย่อยของตัวเอง </span>" + 60000  + " บาท" +"<br>" + 
        "<span>หักค่าประกันสังคม(ทั้งปี) </span>" + sso + " บาท" +"<br>" + 
        "<span>รายได้จากช่องทางอื่นๆ(ทั้งปี) </span>" + incomeOther + " บาท" +"<br>" + 
        "<span>ค่าลดหย่อนอื่นๆ </span>" + taxDeductions + " บาท" + "<br>" + 
        "<div>(สรุป) คุณต้องจ่ายภาษี " +  totalTax + " บาท </div>" 
    } 


}


var content1 = document.getElementById("content1");
        var content2 = document.getElementById("content2");
        var content3 = document.getElementById("content3");
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        var btn3 = document.getElementById("btn3");
        var p2content1 = document.getElementById("p2-content1");
        var p2content2 = document.getElementById("p2-content2");
        var p2content3 = document.getElementById("p2-content3");
        var p2btn1 = document.getElementById("p2-btn1");
        var p2btn2 = document.getElementById("p2-btn2");
        var p2btn3 = document.getElementById("p2-btn3");

        function openFirst() {
            content1.style.transform = "translateX(0)";
            content2.style.transform = "translateX(200%)";
            content3.style.transform = "translateX(200%)";
            btn1.style.color = "#64A21A";
            btn2.style.color = "#9F9F9F";
            btn3.style.color = "#9F9F9F";
            btn1.style.borderBottom = "thick solid #64A21A";
            btn2.style.borderBottom = "thick solid #E5E5E5";
            btn3.style.borderBottom = "thick solid #E5E5E5";
        }
        function openSecond() {
            content1.style.transform = "translateX(200%)";
            content2.style.transform = "translateX(0)";
            content2.style.transform = "translateY(-100%)";
            content3.style.transform = "translateX(200%)";
            btn1.style.color = "#9F9F9F";
            btn2.style.color = "#64A21A";
            btn3.style.color = "#9F9F9F";
            btn1.style.borderBottom = "thick solid #E5E5E5";
            btn2.style.borderBottom = "thick solid #64A21A";
            btn3.style.borderBottom = "thick solid #E5E5E5";
        }
        function openThird() {
            content1.style.transform = "translateX(200%)";
            content2.style.transform = "translateX(200%)";
            content3.style.transform = "translateX(0%)";
            content3.style.transform = "translateY(-200%)";
            btn1.style.color = "#9F9F9F";
            btn2.style.color = "#9F9F9F";
            btn3.style.color = "#64A21A";
            btn1.style.borderBottom = "thick solid #E5E5E5";
            btn2.style.borderBottom = "thick solid #E5E5E5";
            btn3.style.borderBottom = "thick solid #64A21A";
        }
        function openFirstP2() {
            p2content1.style.transform = "translateX(0)";
            p2content2.style.transform = "translateX(200%)";
            p2content3.style.transform = "translateX(200%)";
            p2btn1.style.color = "#64A21A";
            p2btn2.style.color = "#9F9F9F";
            p2btn3.style.color = "#9F9F9F";
            p2btn1.style.borderBottom = "thick solid #64A21A";
            p2btn2.style.borderBottom = "thick solid #E5E5E5";
            p2btn3.style.borderBottom = "thick solid #E5E5E5";
        }
        function openSecondP2() {
            p2content1.style.transform = "translateX(200%)";
            p2content2.style.transform = "translateX(0)";
            p2content2.style.transform = "translateY(-100%)";
            p2content3.style.transform = "translateX(200%)";
            p2btn1.style.color = "#9F9F9F";
            p2btn2.style.color = "#64A21A";
            p2btn3.style.color = "#9F9F9F";
            p2btn1.style.borderBottom = "thick solid #E5E5E5";
            p2btn2.style.borderBottom = "thick solid #64A21A";
            p2btn3.style.borderBottom = "thick solid #E5E5E5";
        }
        function openThirdP2() {
            p2content1.style.transform = "translateX(200%)";
            p2content2.style.transform = "translateX(200%)";
            p2content3.style.transform = "translateX(0%)";
            p2content3.style.transform = "translateY(-200%)";
            p2btn1.style.color = "#9F9F9F";
            p2btn2.style.color = "#9F9F9F";
            p2btn3.style.color = "#64A21A";
            p2btn1.style.borderBottom = "thick solid #E5E5E5";
            p2btn2.style.borderBottom = "thick solid #E5E5E5";
            p2btn3.style.borderBottom = "thick solid #64A21A";
        }
// 물품종류과 갯수를 직접 입력받을 수 잇게 변경

function showMyBag() {
    var myBag = [];

    // 1. 몇 개의 물품을 입력할지 먼저 물어보기
    var itemCount = parseInt(prompt("가방에 넣을 물품은 몇 종류인가요?", "3"));

    // 잘못된 입력(취소, 숫자 아님, 0 이하) 방어
    if (!itemCount || itemCount <= 0) {
        alert("올바른 숫자를 입력해주세요!");
        return;
    }

    // 2. 반복문으로 물품 이름과 개수를 하나씩 입력받기
    for (var i = 0; i < itemCount; i++) {
        var itemName = prompt((i + 1) + "번째 물품 이름을 입력하세요.", "예: 여권 ✈️");
        var itemQty = parseInt(prompt((i + 1) + "번째 물품의 개수를 입력하세요.", "1"));

        // 취소를 누르면 입력 중단
        if (itemName === null || itemQty === null) {
            alert("입력이 취소되었습니다.");
            return;
        }

        // 3. Object 형태로 배열에 추가
        myBag.push({
            name: itemName,
            count: isNaN(itemQty) ? 1 : itemQty
        });
    }

    // 4. 출력할 텍스트 기본 세팅
    var resultText = "🎒 [내 가방 속 물품 목록]\n-----------------------\n";

    // 5. for...in 루프로 출력 (+ 총 개수 누적)
    var totalCount = 0;

    for (var i in myBag) {
        resultText = resultText + "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
        totalCount = totalCount + myBag[i].count;
    }

    resultText = resultText + "-----------------------\n";
    resultText = resultText + "총 물품 개수: " + totalCount + "개";

    // 6. 알림창 출력
    alert(resultText);
}
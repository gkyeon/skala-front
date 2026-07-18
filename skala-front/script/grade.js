function checkGrade() {
    // 1. 과목명이 담긴 배열을 선언
    var subjects = ["HTML", "CSS", "JavsScript"];
    
    // 2. 총점 변수를 0으로 초기화
    var total = 0;

    // 3. 반복문(subjects.length = 3)
    for (var i = 0; i < subjects.length; i++) {
        
        // 과목점수 입력받기
        var score = Number(prompt(subjects[i] + " 점수를 입력해 주세요. (0 ~ 100)"));

        // 예외 처리
        if (isNaN(score)) {
            alert("올바른 숫자가 입력되지 않아 계산을 취소합니다.");
            return;
        }

        // 누적합
        total = total + score;
    }

    // 4. 평군
    var average = total / subjects.length;

    // 5. 조건문 (합/불합, 60점 기준) 
    var result = "";
    if (average >= 60) {
        result = "🎉 합격입니다! 우수자로 선정되었습니다.";
    } else {
        result = "❌ 불합격입니다. 다음 기회에 힘내세요!";
    }

    // 6. 최종 성적표 출력
    alert(
        "====== 📊 성적 결과표 ======\n" +
        "• 총점: " + total + "점\n" +
        "• 평균: " + average.toFixed(1) + "점\n" + // 소수점 첫째 자리까지만 출력
        "---------------------------\n" +
        "• 결과: " + result
    );
}
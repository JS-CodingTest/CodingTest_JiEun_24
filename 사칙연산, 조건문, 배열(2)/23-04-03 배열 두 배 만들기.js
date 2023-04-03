// 문제 링크
// https://school.programmers.co.kr/learn/courses/30/lessons/120809

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000

function solution(numbers) {
    let answer = numbers.map((el) => el * 2);
    // let answer = numbers.map((el) => doubling(el));
    return answer;
}

function doubling(num) {
    return num *= 2;
}
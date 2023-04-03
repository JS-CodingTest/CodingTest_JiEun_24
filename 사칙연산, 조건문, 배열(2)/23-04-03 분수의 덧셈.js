// 문제 링크
// https://school.programmers.co.kr/learn/courses/30/lessons/120808

// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000
function solution(denum1, numer1, denum2, numer2) {
    let answer = [];
    let a = denum1 * numer2 + denum2 * numer1;
    let b = numer1 * numer2;
    let gcd_value = gcd(a, b);
    
    answer = [a / gcd_value, b / gcd_value];
    return answer;
  }
  
  function gcd(i, j) {
    return i % j === 0 ? j : gcd(j, i % j);
  }

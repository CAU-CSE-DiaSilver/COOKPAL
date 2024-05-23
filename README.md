

![image](https://github.com/CAU-CSE-DiaSilver/Front/assets/67683170/78825880-fb99-4810-96bc-deff9071ce40)


검색 하고 나서 오류("invalid attempt to spread non-iterable instance) 뜨면 위에 코드에서
코드 줄7~11에서 문제 생겼을 거임

코드 의도 >> 
recipe에 지금 특정 레시피에 대한 데이터 받아온 값 넣어둠.
근데 첫번째 인덱스에 재료, 이름 등의 값이 들어있고 그 다음부터 단계별 설명이길래, slice(1) 해서 인덱스 1부터 끝까지의 값을 filteredData에 넣은거임

만약 오류가 뜬다면 7~11줄 지우고 return() 안에 코드 16줄 쪽 Text 태그 없애면 됨!

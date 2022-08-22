function solution(k, dungeons) {
  let maxCount = 0;
  let currentMaxCount = 0;
  let start = 0;

  dungeons.sort((a, b) => b[1] - a[1]);

  while (start <= dungeons.length - 1) {
    for (let i = start; i < dungeons.length; i++) {
      if (k < dungeons[i][0]) {
        if (currentMaxCount > maxCount) {
          maxCount = currentMaxCount;
        }

        start++;

        break;
      }

      if (k >= dungeons[i][0]) {
        currentMaxCount++;
        k -= dungeons[i][1];
      }
    }
  }

  return maxCount;
}

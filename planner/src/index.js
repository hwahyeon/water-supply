// 등차급수법 (Arithmetic Progression Method)
function estimatePopulationArithmetic(P0, A, n) {
  // P0: 초기 인구
  // A: 연간 증가량
  // n: 추정 연도 (기준 연도부터 몇 년 후인지)

  return P0 + A * n;
}

// 등비급수법 (Geometric Progression Method)
function estimatePopulationGeometric(P0, r, n) {
  // P0: 초기 인구
  // r: 연간 성장률 (예: 0.02는 2% 증가)
  // n: 추정 연도 (기준 연도부터 몇 년 후인지)

  return P0 * Math.pow(1 + r, n);
}

// 최소자승법 (Least Squares Method)
function linearRegression(x, y) {
  let n = x.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

  for (let i = 0; i < n; i++) {
      sumX += x[i];
      sumY += y[i];
      sumXY += x[i] * y[i];
      sumXX += x[i] * x[i];
  }

  let slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  let intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

function estimatePopulationLeastSquares(years, x, y) {
  let { slope, intercept } = linearRegression(x, y);
  return intercept + slope * years;
}

// 지수곡선법 (Exponential Curve Method)
function exponentialRegression(x, y) {
  let n = x.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

  for (let i = 0; i < n; i++) {
      sumX += x[i];
      sumY += Math.log(y[i]);
      sumXY += x[i] * Math.log(y[i]);
      sumXX += x[i] * x[i];
  }

  let slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  let intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

function estimatePopulationExponential(years, x, y) {
  let { slope, intercept } = exponentialRegression(x, y);
  return Math.exp(intercept + slope * years);
}

// 감소증가율법 (Decrease-Increase Rate Method)
function estimatePopulationDecreaseIncrease(initialPopulation, initialRate, decreaseRate, years) {
  let population = initialPopulation;
  let rate = initialRate;

  for (let i = 1; i <= years; i++) {
      population += population * rate;
      rate -= rate * decreaseRate; // 각 해마다 증가율 감소
  }

  return population;
}

// 논리곡선법 (Logistic Curve Method)
function estimatePopulationLogistic(initialPopulation, growthRate, carryingCapacity, years) {
  let population = initialPopulation;

  for (let i = 1; i <= years; i++) {
      population = population + growthRate * population * (1 - population / carryingCapacity);
  }

  return population;
}
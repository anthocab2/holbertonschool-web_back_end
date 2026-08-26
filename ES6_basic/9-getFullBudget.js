export default function getFullBudgetForCurrentYear(income, gdp, capita) {
  return {
    income,
    gdp,
    capita,
    getIncomeInDollars(incomeValue) {
      return `$${incomeValue}`;
    },
    getIncomeInEuros(incomeValue) {
      return `${incomeValue} euros`;
    },
  };
}

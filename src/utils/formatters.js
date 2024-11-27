export function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  return `${hours} hr${hours !== 1 ? 's' : ''}${mins > 0 ? ` ${mins} min${mins !== 1 ? 's' : ''}` : ''}`;
}

export function formatCO2(co2Value) {
  return isNaN(co2Value) || co2Value < 0
    ? 'CO2 N/A'
    : `${(co2Value * 10).toFixed()} kg CO2e`;
}

export function stopsNumber(segmentsNumber) {
  if (segmentsNumber === 0) {
    return 'Nonstop';
  } else if (segmentsNumber === 2) {
    return '1 stop';
  } else {
    return `${segmentsNumber - 1} stops`;
  }
}
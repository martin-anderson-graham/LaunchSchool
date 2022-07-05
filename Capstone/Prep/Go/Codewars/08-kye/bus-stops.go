package kata

func Number(busStops [][2]int) (sum int) {
  for _, stopArr := range busStops {
    sum = sum + stopArr[0] - stopArr[1]
  }
  return 
}
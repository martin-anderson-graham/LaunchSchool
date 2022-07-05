package kata

func IsTriangle(a, b, c int) bool {
  if a <= 0 || b<=0 || c<=0 {
    return false
  } else if (a + b > c) && (a + c > b) && (c + b > a) {
    return true
  } else {
    return false
  }
}
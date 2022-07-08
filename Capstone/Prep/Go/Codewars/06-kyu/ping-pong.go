package kata

import (
	"strings"
)

func PingPong(sounds string) string {
	scores := strings.Split(sounds, "-")
	rallyStart := true
	gameScore := map[string]int{"ping": 0, "pong": 0}
	firstHit := ""
	lastHit := ""
	rallyLength := 0
	for _, v := range scores {
		if rallyStart {
			if v == "ping" || v == "pong" {
				firstHit = v
				lastHit = v
				rallyStart = false
				rallyLength = 1
				continue
			}
		} else if v != "ping" && v != "pong" {
			rallyStart = true
			if firstHit != lastHit {
				gameScore[firstHit] += 1
			}
		} else {
			lastHit = v
			rallyLength++
		}
	}

	if gameScore["ping"] > gameScore["pong"] {
		return "ping"
	} else if gameScore["ping"] < gameScore["pong"] {
		return "pong"
	} else {
		if lastHit == "ping" {
			return "pong"
		}
		if lastHit == "pong" {
			return "ping"
		}
	}

	return ""
}

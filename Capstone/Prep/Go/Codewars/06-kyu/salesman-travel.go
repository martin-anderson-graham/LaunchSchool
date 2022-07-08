package kata

import (
	//"fmt"
	"strings"
)

func Travel(r, zipcode string) string {
	houseNumbers := make([]string, 0)
	streetTown := make([]string, 0)
	addresses := strings.Split(r, ",")
	if zipcode == "" {
		return ":/"
	}
	for _, v := range addresses {
		if strings.HasSuffix(v, zipcode) {
			noZip := strings.TrimSpace(strings.Replace(v, zipcode, "", -1))
			noZipSlice := strings.Split(noZip, " ")
			houseNumbers = append(houseNumbers, noZipSlice[0])
			streetTown = append(streetTown, strings.Join(noZipSlice[1:], " "))
		}
	}
	if len(houseNumbers) == 0 {
		return zipcode + ":/"
	}
	return zipcode + ":" + strings.Join(streetTown, ",") + "/" + strings.Join(houseNumbers, ",")
}

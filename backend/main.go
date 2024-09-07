package main

import (
	"github.com/KUNSALISA/Project_G11/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("G11_PROJECT.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&entity.Airport{}, &entity.Admin{}, &entity.Airline{}, &entity.Flight{}, &entity.FlightDetails{}, &entity.FlightAndFlightDetails{}, &entity.TypeOfFlight{})
}

package main

import (
	"ecommerce-backend/config"
	"ecommerce-backend/models"
	"ecommerce-backend/routers"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	// Menghubungkan ke database
	config.Connect()
	models.Migrate(config.DB)

	// Inisialisasi router
	router := mux.NewRouter()

	// Daftarkan route produk
	routers.RegisterProductRoutes(router)

	// Konfigurasi CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"}, // Sesuaikan dengan asal frontend Anda
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders: []string{"Authorization", "Content-Type"},
	})

	// Gunakan handler CORS pada router
	http.ListenAndServe(":8000", corsHandler.Handler(router))
}

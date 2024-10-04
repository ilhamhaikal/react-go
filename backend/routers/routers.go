package routers

import (
	"ecommerce-backend/controllers"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors" // Tambahkan ini untuk dukungan CORS
)

// RegisterProductRoutes untuk register route
func RegisterProductRoutes(router *mux.Router) {
	router.HandleFunc("/products", controllers.GetAllProducts).Methods("GET")
	router.HandleFunc("/products", controllers.CreateProduct).Methods("POST")
	router.HandleFunc("/products/{id}", controllers.GetProductByID).Methods("GET")
	router.HandleFunc("/products/{id}", controllers.UpdateProduct).Methods("PUT")
	router.HandleFunc("/products/{id}", controllers.DeleteProduct).Methods("DELETE")
}

// InitRoutes untuk inisialisasi router dengan CORS
func InitRoutes() http.Handler {
	router := mux.NewRouter()

	// Register routes
	RegisterProductRoutes(router)

	// Konfigurasi CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"}, // Sesuaikan dengan asal frontend Anda
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders: []string{"Authorization", "Content-Type"},
	})

	// Gunakan handler CORS pada router
	return corsHandler.Handler(router)
}

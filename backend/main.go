package main

import (
    "fiber-api/config"
	"fiber-api/routes"
    "github.com/gofiber/fiber/v2" 
    "github.com/gofiber/fiber/v2/middleware/cors"
    "log"
)

func main() {
    
    // intialize the app
    app := fiber.New()

    // Cross browser compatability
    // CORS Middleware
    app.Use(cors.New(cors.Config{
        AllowOrigins:     "http://localhost:3000", // Frontend URL
        AllowMethods:     "GET, POST, PUT, DELETE, OPTIONS", // Allow preflight requests
        AllowHeaders:     "Origin, Content-Type, Accept",
        AllowCredentials: false,
    }))

    log.Println("CORS Middleware initialized")

    // Connect to a database
    config.Connect_to_Db()

	// Using the routes
	routes.UserRoute(app)

    // Listening on port number
    // Listen on port number and log server status
    port := ":5001"
    log.Printf("Server is running on http://localhost%s", port)

    // Start the server
    if err := app.Listen(port); err != nil {
        log.Fatalf("Failed to start the server: %v", err)
    }
}
package model

// Build struct represents a custom curry build.
type Build struct {
	Image    string `json:"image,omitempty"`    // Image URL of the custom curry
	Name     string `json:"name,omitempty"`     // Name of the custom curry
	Price    int    `json:"price,omitempty"`    // Price of the custom curry
	Quantity int    `json:"quantity,omitempty"` // Quantity of the custom curry
}

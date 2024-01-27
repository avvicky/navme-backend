# College Bus Service API

This API provides endpoints for managing buses, stops, and routes for a college bus service.

## Environment Variables

Ensure you have a `.env` file in the root directory with the following values:

```
MONGODB_URI=<your MongoDB URI>
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/avvicky/navme-backend.git
   ```

2. Install dependencies:

   ```bash
   cd navme-backend
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## API Documentation

### Buses

#### Get all buses

- **URL:** `/api/buses`
- **Method:** `GET`
- **Description:** Retrieves a list of all buses.
- **Response Body:**
  - `id`: String (Unique identifier for the bus)
  - `busNumber`: String
  - `driverName`: String
  - `driverPhoneNumber`: String

#### Get detail of Specific bus

- **URL:** `/api/buses/{id}`
- **Method:** `GET`
- **Description:** Retrieves details of a specific bus.
- **Path Parameters:**
  - `id`: String (Unique identifier for the bus)
- **Request Body:**
  - `id`: String
- **Response Body:**
  - `id`: String
  - `busNumber`: String
  - `driverName`: String
  - `driverPhoneNumber`: String

#### Create a new bus

- **URL:** `/api/buses`
- **Method:** `POST`
- **Description:** Creates a new bus.
- **Request Body:**
  - `busNumber`: String (required)
  - `driverName`: String (required)
  - `driverPhoneNumber`: String (required)
- **Response Body:**
  - `id`: String
  - `busNumber`: String
  - `driverName`: String
  - `driverPhoneNumber`: String

#### Update a bus

- **URL:** `/api/buses`
- **Method:** `PUT`
- **Description:** Updates an existing bus.
- **Request Body:**
  - `id`: String (required)
  - `busNumber`: String
- **Response Body:**
  - `id`: String
  - `busNumber`: String
  - `driverName`: String
  - `driverPhoneNumber`: String

#### Delete a bus

- **URL:** `/api/buses`
- **Method:** `DELETE`
- **Description:** Deletes a bus.
- **Request Body:**
  - `busId`: String (required)

### Stops and Routes

See Swagger Documentation at http://localhost:3000/api-docs

## Contributors

- [avvicky](https://github.com/avvicky)

# Product Aggregation API

Academic REST API that exposes SQL aggregation queries through Express and Sequelize.

## Endpoints
| GET endpoint | Operation |
| --- | --- |
| `/count-products` | Count product part numbers |
| `/sum-by-producttype` | Sum values grouped by product type |
| `/avg-by-categorycode` | Average value grouped by category |
| `/max-by-plannercode` | Maximum value grouped by planner |

## Run locally
Use Node.js 20.12 or newer, npm, and a MySQL database with the `product` table described in `modelos/product.js`. Column names such as `category.code`, `brand.code`, and `family.code` contain literal dots.
```bash
npm ci
cp .env.example .env
# Set local MySQL details in .env. Do not commit the .env file.
npm start
```
The API listens on port 5000. Example: `curl http://localhost:5000/count-products`.

## Checks
`npm run check` validates JavaScript syntax. Exercising the queries requires a compatible MySQL database and sample data; no data is bundled with this repository.

## Scope
This project demonstrates query aggregation and API responses. It has no authentication, authorization, migrations, or frontend. Run locally using synthetic data.

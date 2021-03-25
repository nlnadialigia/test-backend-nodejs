export const swaggerFile =
{
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    description: 'This is an API for a product catalog management ',
    version: '1.0.0',
    contact: {
      email: 'nlnadialigia@gmail.com'
    }
  },
  paths: {
    '/products': {
      post: {
        tags: ['Products'],
        summary: 'Create a product',
        description: 'Create a new product',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  $ref: '#/definitions/Product'
                },
                $ref: '#/definitions/Example'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Created'
          },
          500: {
            description: 'Bad Request'
          }
        }
      },
      get: {
        tags: ['Products'],
        summary: 'List all products',
        description: 'List all products',
        responses: {
          200: {
            description: 'Sucess',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Product'
                  }
                }
              }
            }
          },
          500: {
            description: 'Bad Request'
          }
        }
      }
    },
    '/products/{id}': {
      put: {
        tags: ['Products'],
        summary: 'Get product by ID',
        description: 'Search a product by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Ok'
          },
          404: {
            description: 'Not Found'
          },
          500: {
            description: 'Bad Request'
          }
        }
      },
      delete: {
        tags: ['Products'],
        summary: 'Remove product by ID',
        description: 'Search a product by ID and remove',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          204: {
            description: 'Not content'
          },
          404: {
            description: 'Not Found'
          },
          500: {
            description: 'Bad Request'
          }
        }

      }
    }
  },
  definitions: {
    Product: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        price: {
          type: 'number'
        },
        category: {
          type: 'string'
        }
      }
    },
    Example: {
      example: {
        title: 'some title',
        description: 'some description',
        price: 1.15,
        category: 'some category'
      }
    }
  }
};

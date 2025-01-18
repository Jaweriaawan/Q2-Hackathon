interface ProductField {
    name: string;
    title: string;
    type: string;
    validation?: (Rule: any) => any;
    of?: { type: string }[];
    options?: {
        list?: { title: string; value: string }[];
        layout?: string;
        source?: string;
    };
  }
  
  interface ProductSchema {
    name: string;
    title: string;
    type: string;
    fields: ProductField[];
  }
  
  const productSchema: ProductSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number',
            validation: Rule => Rule.required().integer().min(1)
        },
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
            validation: Rule => Rule.required().positive()
        },
        {
            name: 'inventory',
            title: 'Inventory',
            type: 'number',
            validation: Rule => Rule.required().integer().min(0)
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Just In', value: 'Just In' },
                    { title: 'Available', value: 'Available' },
                    { title: 'Out of Stock', value: 'Out of Stock' },
                ],
                layout: 'dropdown'
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required().uri({ allowRelative: false })
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'productName'
            },
            validation: Rule => Rule.required()
        }
    ]
  };
  
  export default productSchema;
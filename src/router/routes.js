export const routes = [
    {
        path: '/products',
        name: 'products',
        component: () => import('@/views/products/products-list')
    },
    {
        path: '/add-product',
        name: 'add-product',
        component: () => import('@/views/products/product-add')
    },
    {
        path: '/edit-product/:id/:editRoute',
        name: 'edit-product',
        component: () => import('@/views/products/product-edit')
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/products'
    },
];
export const PRODUCTS = [
    { id: 1, title: '22K Gold Traditional Haram Necklace', price: '94,500', oldPrice: '1,05,750', category: 'necklace', isNew: true, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Floral Mesh Gold Pendant Set', price: '45,845', oldPrice: '52,499', category: 'necklace', isNew: false, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Sunburst Gold Plated Dollar Chain', price: '8,899', oldPrice: '12,550', category: 'chains', isNew: true, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Classic Rope Chain Haram', price: '12,899', oldPrice: '15,550', category: 'chains', isNew: false, image: 'https://images.unsplash.com/photo-1611085583191-a3b1a30a840c?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: '24K Leaf Pattern Gold Ring', price: '18,399', oldPrice: '22,599', category: 'rings', isNew: true, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Micro Plated Leaf Haram', price: '2,199', oldPrice: '3,250', category: 'necklace', isNew: false, image: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=800&q=80' },
    { id: 7, title: 'White Stone Star Dollar', price: '3,750', oldPrice: '4,990', category: 'chains', isNew: false, image: 'https://images.unsplash.com/photo-1596944214946-15e79cbb9473?auto=format&fit=crop&w=800&q=80' },
    { id: 8, title: 'Authentic Impon Stone Chain', price: '4,250', oldPrice: '6,099', category: 'chains', isNew: true, image: 'https://images.unsplash.com/photo-1611591439902-16781f6920f7?auto=format&fit=crop&w=800&q=80' },
    { id: 9, title: 'Antique Ruby Gold Jhumkas', price: '12,345', oldPrice: '15,599', category: 'earrings', isNew: true, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80' },
    { id: 10, title: 'Peacock Earrings', price: '15,345', oldPrice: '18,599', category: 'earrings', isNew: false, image: 'https://images.unsplash.com/photo-1635767790130-9759723f46f4?auto=format&fit=crop&w=800&q=80' },
    { id: 11, title: 'Heritage Gold Bangle Pair', price: '85,450', oldPrice: '98,499', category: 'bangles', isNew: true, image: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?auto=format&fit=crop&w=800&q=80' },
    { id: 12, title: 'Bridal Stone Studded Bangles', price: '1,12,899', oldPrice: '1,28,250', category: 'bangles', isNew: false, image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=800&q=80' },
    { id: 13, title: 'Modern Filigree Bangles', price: '45,299', oldPrice: '52,150', category: 'bangles', isNew: false, image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=800&q=80' },
    { id: 14, title: 'Traditional Gold Buttas', price: '8,545', oldPrice: '12,999', category: 'buttas', isNew: true, image: 'https://images.unsplash.com/photo-1617038220319-276d3ac54ef4?auto=format&fit=crop&w=800&q=80' },
];

export const getProducts = () => PRODUCTS;
export const getProductById = (id) => PRODUCTS.find(p => p.id === parseInt(id));
export const getProductsByCategory = (category) =>
    category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
export const getNewArrivals = () => PRODUCTS.filter(p => p.isNew);

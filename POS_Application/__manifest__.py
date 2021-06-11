{
    'name': 'POS Applications',
    'version': '1.0',
    'summary': 'This Applcation only for Pratice',
    'description': 'Point of Sales Applications',
    'author': 'Mayur Kumar Bhure',
    'website': 'www.google.com',
    'depends': ['point_of_sale'],
    'data': [
        # 'views/pos.xml',
        'views/assets.xml',
        'views/Customer_extend_fields.xml'
    ],
    'qweb': ['static/src/xml/customer_extend.xml', 'static/src/xml/your_form_view.xml'],
    'installable': True,
    'auto_install': False,
}

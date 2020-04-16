/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    plugins: {
        ptype : 'rowediting'
    },

    columns: [
        // { text: 'id',  dataIndex: 'id',width:100},
        { text: 'nama',  dataIndex: 'nama', editor: 'textfield',width:250 },
        { text: 'birthplace', dataIndex: 'birthplace', editor: 'textfield',width:250},
        { text: 'birthday', dataIndex: 'birthday',editor:'textfield',width:250},
        { text: 'created_at', dataIndex: 'created_at',width:250},
        { text: 'updated_at', dataIndex: 'updated_at',width:250},

    ],

    tbar: [{
        text: 'Add Employee',
        handler: 'onAddClick'
    }, {
        xtype:'button',
        text: 'Remove Employee',
        reference: 'removeEmployee',
        handler: 'onRemoveClick',
        disabled: true,
        id:'hapus',
        
    }],

    listeners: {
        select: 'onItemSelected'
    }
});

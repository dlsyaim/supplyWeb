$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-110;
	$saleTale.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		pageSize:20,
		clickToSelect: true,
		pageList:'[20]',
		classes: 'table saleTable table-hover',
		height:iHeight,
		columns:[{
			checkbox:true
		},{
    		field: 'name',
    		title: '部门名称',
    		valign:'middle'
    	},{
    		field: 'type',
    		title: '备注',
    		valign:'middle'
    	}],
	    data:[{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-110
		});
	})
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$saleTale.bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('.search-box input').val('');
		$saleTale.bootstrapTable('refresh');
	});
	//新增
	$('#addBtn').on('click',function(){
		addSector();
	});
	//编辑
    $("#editBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            editSector();
        }

    });
	//删除
    $("#delBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            parent.layer.confirm('确定要删除这条数据吗？',
                {icon: 3, title: '提示', area: '300px', btnAlign: 'c'}, function (index) {
                    parent.layer.close(index);
                });
        }

    });
})
//新增数据
function addSector() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '新增部门',
        area: ['500px', '250px'],
        content: 'rightMgnt/sector/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//编辑数据
function editSector() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '编辑部门',
        area: ['500px', '250px'],
        content: 'rightMgnt/sector/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
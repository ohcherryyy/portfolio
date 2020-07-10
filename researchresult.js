function pie(){
    option = {
        title: {
            text: '想要获得的历史保护建筑信息',
            left: 'center',
            
            textStyle: {
                color: '#888888'
            }
        },
    
        tooltip: {
            trigger: 'item',
            formatter: '{b}:{c}%'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '65%',
                center: ['50%', '60%'],
                startAngle:100,
                data: [
                    {value: 36, name: '建筑内部细节',itemStyle:{color:'#EAB12D'}},
                    {value: 31, name: '建筑历史故事',itemStyle:{color:'#7F6B5D'}},
                    {value: 27, name: '建筑外观特点',itemStyle:{color:'#7AA1AA'}},
                    {value: 4, name: '建筑过去的样子',itemStyle:{color:'#B4BAB5'}},
                    {value: 2, name: '其他',itemStyle:{color:'#F7F4F1'}}
                ],
                label: {
                    color: '#888888'
                },
                labelLine: {
                    lineStyle: {
                        color: '#acacac'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    return option;
}
function treemap(){
    option = {
        title:{
            text:'是否分享旅游经历',
            left:'center',
            textStyle:{
                color:'#888888'
            }
        },
        tooltip:{
          formatter:'{b}:{c}'  
        },
        series: [{
            type: 'treemap',
            breadcrumb:{
                show:false,
            },
            height:'80%',
            width:'95%',
            top:'20%',
            data: [{
                name: '是',            // First tree
                value: 183,
                
                itemStyle:{
                    color:'#EAB12D'
                },
                children: [{
                    name: '社交平台',       // First leaf of first tree
                    value: 141,
                    label:{
                    show:true,
                    position:'insideBottomLeft',
                    formatter:'{b}\n{c}',
                    fontSize:15
                },
                }, {
                    name: '家人朋友',       // Second leaf of first tree
                    value: 23,
                    label:{
                    show:true,
                    position:'insideBottomLeft',
                    formatter:'{b}\n{c}',
                    fontSize:12
                },
                }, {
                    name: '攻略论坛',       // Second leaf of first tree
                    value: 19,
                    label:{
                    show:true,
                    position:'insideBottomLeft',
                    formatter:'{b}\n{c}',
                    fontSize:12
                },
                }]
            }, {
                name: '否',            // Second tree
                value: 17,
                label:{
                    show:true,
                    position:'insideBottomLeft',
                    formatter:'{b}\n{c}',
                    fontSize:12
                },
                itemStyle:{
                    color:'#7AA1AA'
                }
            }]
        }]
    };
    return option;
}
function complex(){
    option={
        title:[{
            text:'是否会参观历史保护建筑',
            left:'25%',
            textAlign:'center',
            textStyle:{
                color:'#888888',
                fontSize:13
            }
        },
        {
            text:'选择参观的理由',
            left:'75%',
            textAlign:'center',
            textStyle:{
                color:'#888888',
                fontSize:13
            }
        },
        {
            text:'选择不参观的理由',
            left:'75%',
            top:'40%',
            textAlign:'center',
            textStyle:{
                color:'#888888',
                fontSize:13
            }
        }],
        grid:[{
            left:'73%',
            top:'10%',
            width:'40%',
            height:'25%',
        },{
            left:'73%',
            bottom:'10%',
            width:'40%',
            height:'40%'
        }],
        xAxis:[{
            gridIndex:0,
            show:false
        },{
            gridIndex:1,
            show:false
        }],
        yAxis:[{
            type:'category',
            data:[{value:'想了解建筑信息',textStyle:{color:'#888888'}},{value:'觉得好看',textStyle:{color:'#888888'}}]
        },{
            gridIndex:1,
            type:'category',
            data:[{value:'有进出限制',textStyle:{color:'#888888'}},{value:'不清楚位置',textStyle:{color:'#888888'}},{value:'不感兴趣',textStyle:{color:'#888888'}}]
        }],
        tooltip:{
            formatter:'{b}:{c}%'
        },
        series:[{
            type:'pie',
            radius:'45%',
            center:['25%','50%'],
            startAngle:140,
            data:[
                {value:37,name:'是',itemStyle:{color:'#EAB12D'}},
                {value:63,name:'否',itemStyle:{color:'#7AA1AA'}}
            ],
            label: {
                color: '#888888'
            },
            labelLine: {
                lineStyle: {
                    color: '#acacac'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                shadowBlur: 5,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            tooltip:{
                formatter:'{b}:{c}%'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        },{
            type:'bar',
            data:[15,29],
            xAxisIndex:0,
            yAxisIndex:0,
            itemStyle:{
                color:'#EAB12D'
            },
            tooltip:{
                formatter:'{b}:{c}'
            },
        },{
            type:'bar',
            data:[14,26,18],
            xAxisIndex:1,
            yAxisIndex:1,
            itemStyle:{
                color:'#7AA1AA'
            },
            tooltip:{
                formatter:'{b}:{c}'
            },
        }]
    }
    return option;
}
function pie(){
    option = {
        title: {
            text: 'Wanted info of historical buildings',
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
                startAngle:120,
                data: [
                    {value: 36, name: 'Interiors',itemStyle:{color:'#EAB12D'}},
                    {value: 31, name: 'Histories',itemStyle:{color:'#7F6B5D'}},
                    {value: 27, name: 'Exterior',itemStyle:{color:'#7AA1AA'}},
                    {value: 4, name: 'The past image',itemStyle:{color:'#B4BAB5'}},
                    {value: 2, name: 'Others',itemStyle:{color:'#F7F4F1'}}
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
            text:'Whether to share your journey or not',
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
            roam:false,
            breadcrumb:{
                show:false,
            },
            height:'80%',
            width:'95%',
            top:'20%',
            data: [{
                name: 'Yes',            // First tree
                value: 183,
                
                itemStyle:{
                    color:'#EAB12D'
                },
                children: [{
                    name: 'Social platforms',       // First leaf of first tree
                    value: 141,
                    label:{
                    show:true,
                    position:'insideBottomLeft',
                    formatter:'{b}\n{c}',
                    fontSize:15
                },
                }, {
                    name: 'Family and friends',       // Second leaf of first tree
                    value: 23,
                    label:{
                    show:true,
                    position:'insideBottomLeft',
                    formatter:'{b}\n{c}',
                    fontSize:12
                },
                }, {
                    name: 'Forums for travellers',       // Second leaf of first tree
                    value: 19,
                    label:{
                    show:true,
                    position:'insideBottomLeft',
                    formatter:'{b}\n{c}',
                    fontSize:12
                },
                }]
            }, {
                name: 'No',            // Second tree
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
            text:'Visit historical buildings or not',
            left:'25%',
            textAlign:'center',
            textStyle:{
                color:'#888888',
                fontSize:12
            }
        },
        {
            text:'Reasons for visiting',
            left:'75%',
            textAlign:'center',
            textStyle:{
                color:'#888888',
                fontSize:12
            }
        },
        {
            text:'Reasons for not visiting',
            left:'75%',
            top:'40%',
            textAlign:'center',
            textStyle:{
                color:'#888888',
                fontSize:12
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
            data:[{value:'Want to know buildings',textStyle:{color:'#888888',fontSize:10}},{value:'Feel it beautiful',textStyle:{color:'#888888',fontSize:10}}]
        },{
            gridIndex:1,
            type:'category',
            data:[{value:'Access restrictions',textStyle:{color:'#888888',fontSize:10}},{value:'Unclear about the location',textStyle:{color:'#888888',fontSize:10}},{value:'Not interested',textStyle:{color:'#888888',fontSize:11}}]
        }],
        tooltip:{
            formatter:'{b}:{c}%'
        },
        series:[{
            type:'pie',
            radius:'55%',
            center:['23%','50%'],
            startAngle:150,
            data:[
                {value:37,name:'Yes',itemStyle:{color:'#EAB12D'}},
                {value:63,name:'No',itemStyle:{color:'#7AA1AA'}}
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
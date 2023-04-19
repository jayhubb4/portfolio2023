export default {
    name:'experiences',
    title:'Experience',
    type:'document',
    fields:[
            {   
              name:'position',
              title:'Position',
              type:'string'
            },
            {   
              name:'date',
              title:'Date',
              type:'string'
            },
            {
              name:'company',
              title:'Company',
              type:'string'
            },
            {
              name:'icon',
              title:'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }, 
            {
              name:'description',
              title:'Description',
              type:'array',
              of: [
                  {
                  type: 'block',
                      
                  }
              ]
            }
    ]
}
const appConstants = {
    monthName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    country: [
                    {name:'india', code: 91},
                    {name:'us', code: 1},
                    {name:'nepal', code: 10}
                  ],
    monthIndex: [0,1,2,3,4,5,6,7,8,9,10,11],
    characterCounts: {
        firstNameLimit: 30
    },
    noData: `NA`,
    validationRules: {
        titleRequired: {
            rule: `isRequired`,
            errorMessage: `firstName is required`
        }
    },
    breadCrumb: {
        // selectListLinks: [{link: '/', name: 'Home', className: 'active'},
        //                   {link: '/selectList', name: 'selectList', className: 'currentPage'}],

        studentLinks: [{link: '/', name: 'Home', className: 'active'},
                      {link: '/studentApp', name: 'studentList', className: 'currentPage'}],

        // loginLinks: [{link: '/', name: 'Home', className: 'active'},
        //               {link: '/login', name: 'login', className: 'currentPage'}],

        studentDetailsLink: [{link: '/', name: 'Home', className: 'active'},
                          {link: '/studentApp', name: 'studentList', className: 'active'},
                          {link: '/studentDetails', name: 'studentDetails', className: 'currentPage'}],

        getName(orgName) {
            return [{link: '/', name: `home${orgName}`, className: 'currentPage'},
 //                   {link: '/selectList', name: 'selectList', className: 'active'},
                    {link: '/studentApp', name: 'studentList', className: 'active'}
   //                 {link: '/login', name: 'login', className: 'active'}
                    ]
        },
    },
}
export default appConstants;

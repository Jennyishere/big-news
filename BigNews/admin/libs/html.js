//封装一个登陆的路径 沙箱
;(function (w) { 
    let basePath = 'http://localhost:8080/api/v1';
    let path = {
        basePath: basePath,
        loginPath: basePath + '/admin/user/login',   //用户登录
        getinfoPath: basePath + '/admin/user/info',  //获取用户信息
        getUserDetailPath: basePath + '/admin/user/detail', //获取用户详情
        getUserEditPath: basePath + '/admin/user/edit', //编辑用户信息
        getListPath: basePath + '/admin/category/list',     //所有文章类别
        getAddPath: basePath + '/admin/category/add',  //6、新增文章类别
        getSearchPath: basePath + '/admin/category/search', //7根据id查询指定文章类别
        getEditAticalPath: basePath + '/admin/category/edit', //8、编辑文章类别
        getDeletePath: basePath + '/admin/category/delete',  //9、删除文章类别
        getQueryPath: basePath + '/admin/article/query', //10、文章搜索
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
        // getPath: basePath +
    };
    w.path = path;
 })(window);

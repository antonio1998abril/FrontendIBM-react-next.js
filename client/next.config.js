module.exports = {
  //reactStrictMode:true,
  async rewrites (){
    return [{
      source:'/api/info',
      destination:'http://localhost:5000/api/info'
    }]
  }
}

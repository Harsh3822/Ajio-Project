export const {id}=useParams()
   
axios.get(`http://localhost:3000/men/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(` http://localhost:3000/men-shirts/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(` http://localhost:3000/men-pants/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/men-tshirt/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/women/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/women-kurtas/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/women-tshirt/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/women-sarees/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/kids/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/kids-tops/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/kids-bag/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/kids-jacket/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/face-wash/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/perfumes/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/beauty/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/shampoo/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/home-kitchen/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/wall-decor/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/photo-frames/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

axios.get(`http://localhost:3000/kitchen/${id}`)
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))

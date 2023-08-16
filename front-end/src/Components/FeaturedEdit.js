import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ItemContext } from "../Context/itemContext"
import NavigationBar from "./NavigationBar"
import { Button, Form } from "react-bootstrap"

function FeaturedEdit() {
    let params = useParams()
    let navigate = useNavigate()
    let [item, setItem] = useState({
        title: "",
        description: "",
        price: "",
        itemId: params.itemId,
        ImageUrl: "",
        releaseDate: "",
        link: ""
    })

    let { title, description, price, itemId, imageUrl, releaseDate, link } = item

    const { getItem, editItem } = useContext(ItemContext)

    useEffect(() => {
        if (itemId === undefined) return
        async function fetch() {
            await getItem(params.itemId)
                .then((item) => {
                    setItem(item)
                })
        }
        fetch()
    }, [itemId])

    function handleChange(event) {
        setItem((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // add().then((product) =>
        //   navigate(`/products/${product.id}`)
        // )
      }

    return (
        <>
            <NavigationBar />
            <Form style={{color: "white", margin: "20px"}}>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Tier</Form.Label>
                <Form.Control type="text" name="imageUrl" value={imageUrl} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>{`Is it digital? (yes or no)`}</Form.Label>
                <Form.Control type="text" name="link" value={link} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleChange} />
            </Form.Group>
        <Button type="submit">Add</Button>
        </Form>
        </>
    )
}
export default FeaturedEdit
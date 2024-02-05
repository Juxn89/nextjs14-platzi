import Image from 'next/image'

export const Description = () => {
  return (
    <section>
			<Image src='/images/description.jpeg' alt='products marketplace' width={320} height={320}/>
			<h2>Description</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perferendis soluta earum voluptate reprehenderit eius nostrum sed labore nam, vel vero quod! Sint ipsam quas deserunt voluptatibus, odit error dolor!</p>
		</section>
  )
}

// app/services/[id]/[slug]/page.js
import BreadCrumb from "@/components/BreadCrumb";
import { notFound } from "next/navigation";

const services = [
    {
        id: '1',
        slug: "strategic-consulting",
        title: "Strategic consulting",
        img: "https://bakertilly-ca.com/wp-content/uploads/2022/02/strategic_consulting.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia atque! Vel temporibus iure cum beatae illo, odit fugiat quia sunt sit. Totam nihil est at et ipsa facere, numquam ducimus eius molestias impedit. Eveniet at inventore molestiae ex enim. Ipsa velit voluptatum voluptates repellat iure officia quidem sed, impedit veritatis maiores doloremque asperiores aperiam enim facilis perspiciatis quibusdam expedita reprehenderit dicta itaque odit repudiandae minus quis! Iste aliquam porro dolores excepturi facere inventore voluptates quidem, \n consequatur fugiat vitae illum sapiente, animi soluta, eveniet facilis alias autem laudantium? Optio fuga dolore voluptatem ea, repellendus exercitationem ducimus rem possimus quis ex aspernatur eos reiciendis voluptates voluptas enim illum magni asperiores necessitatibus nemo. Quisquam distinctio exercitationem nobis quos. Reiciendis delectus rem error molestias voluptatem, assumenda, doloribus dolorem ipsa amet dignissimos illo architecto expedita. Earum quaerat debitis quidem, eius odio, rem autem repellat illo alias natus accusamus nam at consequatur modi beatae minima dicta incidunt nisi, nulla quas? Eaque fuga voluptate magnam hic at quia tenetur quaerat vero accusamus deserunt sunt illum quam molestiae minus dolor rem ipsa dicta, corporis magni dignissimos delectus quas eveniet officia aspernatur! \n Unde beatae possimus tempore repellat nostrum nesciunt, sed totam expedita molestias nihil vero optio iste odio."
    },
    {
        id: "2",
        slug: "assurance-service",
        title: "Assurance Service",
        img: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia atque! Vel temporibus iure cum beatae illo, odit fugiat quia sunt sit. Totam nihil est at et ipsa facere, numquam ducimus eius molestias impedit. Eveniet at inventore molestiae ex enim. Ipsa velit voluptatum voluptates repellat iure officia quidem sed, impedit veritatis maiores doloremque asperiores aperiam enim facilis perspiciatis quibusdam expedita reprehenderit dicta itaque odit repudiandae minus quis! Iste aliquam porro dolores excepturi facere inventore voluptates quidem, \n consequatur fugiat vitae illum sapiente, animi soluta, eveniet facilis alias autem laudantium? Optio fuga dolore voluptatem ea, repellendus exercitationem ducimus rem possimus quis ex aspernatur eos reiciendis voluptates voluptas enim illum magni asperiores necessitatibus nemo. Quisquam distinctio exercitationem nobis quos. Reiciendis delectus rem error molestias voluptatem, assumenda, doloribus dolorem ipsa amet dignissimos illo architecto expedita. Earum quaerat debitis quidem, eius odio, rem autem repellat illo alias natus accusamus nam at consequatur modi beatae minima dicta incidunt nisi, nulla quas? Eaque fuga voluptate magnam hic at quia tenetur quaerat vero accusamus deserunt sunt illum quam molestiae minus dolor rem ipsa dicta, corporis magni dignissimos delectus quas eveniet officia aspernatur! \n Unde beatae possimus tempore repellat nostrum nesciunt, sed totam expedita molestias nihil vero optio iste odio."
    },
    {
        id: "3",
        slug: "human-resource-service",
        title: "Human Resource Service",
        img: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia atque! Vel temporibus iure cum beatae illo, odit fugiat quia sunt sit. Totam nihil est at et ipsa facere, numquam ducimus eius molestias impedit. Eveniet at inventore molestiae ex enim. Ipsa velit voluptatum voluptates repellat iure officia quidem sed, impedit veritatis maiores doloremque asperiores aperiam enim facilis perspiciatis quibusdam expedita reprehenderit dicta itaque odit repudiandae minus quis! Iste aliquam porro dolores excepturi facere inventore voluptates quidem, \n consequatur fugiat vitae illum sapiente, animi soluta, eveniet facilis alias autem laudantium? Optio fuga dolore voluptatem ea, repellendus exercitationem ducimus rem possimus quis ex aspernatur eos reiciendis voluptates voluptas enim illum magni asperiores necessitatibus nemo. Quisquam distinctio exercitationem nobis quos. Reiciendis delectus rem error molestias voluptatem, assumenda, doloribus dolorem ipsa amet dignissimos illo architecto expedita. Earum quaerat debitis quidem, eius odio, rem autem repellat illo alias natus accusamus nam at consequatur modi beatae minima dicta incidunt nisi, nulla quas? Eaque fuga voluptate magnam hic at quia tenetur quaerat vero accusamus deserunt sunt illum quam molestiae minus dolor rem ipsa dicta, corporis magni dignissimos delectus quas eveniet officia aspernatur! \n Unde beatae possimus tempore repellat nostrum nesciunt, sed totam expedita molestias nihil vero optio iste odio."
    },
    {
        id: "4",
        slug: "compliance-management",
        title: "Compliance Management",
        img: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia atque! Vel temporibus iure cum beatae illo, odit fugiat quia sunt sit. Totam nihil est at et ipsa facere, numquam ducimus eius molestias impedit. Eveniet at inventore molestiae ex enim. Ipsa velit voluptatum voluptates repellat iure officia quidem sed, impedit veritatis maiores doloremque asperiores aperiam enim facilis perspiciatis quibusdam expedita reprehenderit dicta itaque odit repudiandae minus quis! Iste aliquam porro dolores excepturi facere inventore voluptates quidem, \n consequatur fugiat vitae illum sapiente, animi soluta, eveniet facilis alias autem laudantium? Optio fuga dolore voluptatem ea, repellendus exercitationem ducimus rem possimus quis ex aspernatur eos reiciendis voluptates voluptas enim illum magni asperiores necessitatibus nemo. Quisquam distinctio exercitationem nobis quos. Reiciendis delectus rem error molestias voluptatem, assumenda, doloribus dolorem ipsa amet dignissimos illo architecto expedita. Earum quaerat debitis quidem, eius odio, rem autem repellat illo alias natus accusamus nam at consequatur modi beatae minima dicta incidunt nisi, nulla quas? Eaque fuga voluptate magnam hic at quia tenetur quaerat vero accusamus deserunt sunt illum quam molestiae minus dolor rem ipsa dicta, corporis magni dignissimos delectus quas eveniet officia aspernatur! \n Unde beatae possimus tempore repellat nostrum nesciunt, sed totam expedita molestias nihil vero optio iste odio."
    },
    {
        id: "5",
        slug: "payroll-service",
        title: "Payroll Service",
        img: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia atque! Vel temporibus iure cum beatae illo, odit fugiat quia sunt sit. Totam nihil est at et ipsa facere, numquam ducimus eius molestias impedit. Eveniet at inventore molestiae ex enim. Ipsa velit voluptatum voluptates repellat iure officia quidem sed, impedit veritatis maiores doloremque asperiores aperiam enim facilis perspiciatis quibusdam expedita reprehenderit dicta itaque odit repudiandae minus quis! Iste aliquam porro dolores excepturi facere inventore voluptates quidem, \n consequatur fugiat vitae illum sapiente, animi soluta, eveniet facilis alias autem laudantium? Optio fuga dolore voluptatem ea, repellendus exercitationem ducimus rem possimus quis ex aspernatur eos reiciendis voluptates voluptas enim illum magni asperiores necessitatibus nemo. Quisquam distinctio exercitationem nobis quos. Reiciendis delectus rem error molestias voluptatem, assumenda, doloribus dolorem ipsa amet dignissimos illo architecto expedita. Earum quaerat debitis quidem, eius odio, rem autem repellat illo alias natus accusamus nam at consequatur modi beatae minima dicta incidunt nisi, nulla quas? Eaque fuga voluptate magnam hic at quia tenetur quaerat vero accusamus deserunt sunt illum quam molestiae minus dolor rem ipsa dicta, corporis magni dignissimos delectus quas eveniet officia aspernatur! \n Unde beatae possimus tempore repellat nostrum nesciunt, sed totam expedita molestias nihil vero optio iste odio."
    },
    {
        id: "6",
        slug: "MIS-360",
        title: "MIS 360",
        img: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia atque! Vel temporibus iure cum beatae illo, odit fugiat quia sunt sit. Totam nihil est at et ipsa facere, numquam ducimus eius molestias impedit. Eveniet at inventore molestiae ex enim. Ipsa velit voluptatum voluptates repellat iure officia quidem sed, impedit veritatis maiores doloremque asperiores aperiam enim facilis perspiciatis quibusdam expedita reprehenderit dicta itaque odit repudiandae minus quis! Iste aliquam porro dolores excepturi facere inventore voluptates quidem, \n consequatur fugiat vitae illum sapiente, animi soluta, eveniet facilis alias autem laudantium? Optio fuga dolore voluptatem ea, repellendus exercitationem ducimus rem possimus quis ex aspernatur eos reiciendis voluptates voluptas enim illum magni asperiores necessitatibus nemo. Quisquam distinctio exercitationem nobis quos. Reiciendis delectus rem error molestias voluptatem, assumenda, doloribus dolorem ipsa amet dignissimos illo architecto expedita. Earum quaerat debitis quidem, eius odio, rem autem repellat illo alias natus accusamus nam at consequatur modi beatae minima dicta incidunt nisi, nulla quas? Eaque fuga voluptate magnam hic at quia tenetur quaerat vero accusamus deserunt sunt illum quam molestiae minus dolor rem ipsa dicta, corporis magni dignissimos delectus quas eveniet officia aspernatur! \n Unde beatae possimus tempore repellat nostrum nesciunt, sed totam expedita molestias nihil vero optio iste odio."
    },
];

export default async function ServicePage({ params }) {
    const p = await params;
    const { id, slug } = p;
    const service = services.find(
        (s) => s.id === id && s.slug === slug
    );

    if (!service) return notFound();

    return (
        <>
            <section className="w-[90vw] mx-auto md:px-20">
                <div className="flex flex-col gap-2 mx-auto">
                    <BreadCrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/Services' },
                        { label: service.title }
                    ]} />
                    <div className="my-2">
                        <img src={service.img} alt="image" loading="lazy" className="w-fit lg:w-[90vw] rounded-lg " />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">{service.title}</h1>
                    </div>
                    <div>
                        {service.content.split("\n").map((para, i) => (
                            <p key={i} className="my-2 text-justify">{para}</p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

import ActionButton from '@/shared/ActionButton'
import HText from '@/shared/HText'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "state of the art facilities",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sed. Laboriosam alias quas repudiandae asperiores fugiat adipisci minima atque dignissimos illo consequatur? Optio impedit laudantium qui veritatis soluta, eos nostrum!"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's diverse class",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sed. Laboriosam alias quas repudiandae asperiores fugiat adipisci minima atque dignissimos illo consequatur? Optio impedit laudantium qui veritatis soluta, eos nostrum!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and pro trainers",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sed. Laboriosam alias quas repudiandae asperiores fugiat adipisci minima atque dignissimos illo consequatur? Optio impedit laudantium qui veritatis soluta, eos nostrum!"
    }
]
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sed. Laboriosam alias quas repudiandae asperiores fugiat adipisci minima atque dignissimos illo consequatur? Optio impedit laudantium qui veritatis soluta, eos nostrum!

                    </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {
                        benefits.map((benefit: BenefitType) => (
                            <Benefit
                                key={benefit.title}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))
                    }
                </motion.div>
                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHICS */}
                    <img
                        className="mx-auto"
                        alt="benefit-graphic"
                        src={BenefitsPageGraphic}
                    />

                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1 before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY GETTING {" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay:0.2, duration: 1 }}
                         variants={{
                             hidden: { opacity: 0, x: -50 },
                             visible: { opacity: 1, x: 0 }
                         }}
                        >
                            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur cumque facere corporis consequuntur? Ipsam vero aperiam quaerat exercitationem obcaecati molestiae eligendi? Ipsum, dolore atque. Laborum, quaerat perspiciatis? Quas molestias quod magni qui optio? Veritatis beatae quia aliquam pariatur unde nulla? Nesciunt eligendi reprehenderit molestias voluptates deserunt ipsam obcaecati incidunt quisquam ipsum perspiciatis. Ad deleniti natus ducimus porro, hic neque beatae possimus, iste et distinctio facilis rerum architecto ea. Nisi ipsum in possimus quae provident quos nam eum tenetur eos.</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur cumque facere corporis consequuntur? Ipsam vero aperiam quaerat exercitationem obcaecati molestiae eligendi? Ipsum, dolore atque. Laborum, quaerat perspiciatis? Quas molestias quod magni qui optio? Veritatis beatae quia aliquam pariatur unde nulla? Nesciunt eligendi reprehenderit molestias voluptates deserunt ipsam obcaecati incidunt quisquam ipsum perspiciatis. Ad deleniti natus ducimus porro, hic neque beatae possimus, iste et distinctio facilis rerum architecto ea. Nisi ipsum in possimus quae provident quos nam eum tenetur eos.</p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-Sparkles">
                                <ActionButton
                                    setSelectedPage={setSelectedPage}
                                >
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
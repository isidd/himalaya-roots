"use client"
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";


export default function ProductDetailTabs(){

const [value, setValue] = React.useState(0);

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

const a11yProps = (index: number)=> {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const CustomTabPanel = ({children, value, index, ...other}: any)=> (
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
                >
                {value === index && (
                    <Typography sx={{p:3}} >{children}</Typography>
                )}
            </Box>
        );

    return (
    <>
    <Box mt={1} mb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" scrollButtons="auto" variant="scrollable" >
                            <Tab label={ <Typography variant="h6"> Origin Story </Typography>} {...a11yProps(0)} />
                            <Tab label={<Typography variant="h6"> Nutrition Facts </Typography>} {...a11yProps(1)} />
                            <Tab label={<Typography variant="h6"> Certification </Typography>} {...a11yProps(2)} />
                        </Tabs>
                    </Box>

                    <Box>
                        <CustomTabPanel value={value} index={0}>
                            <> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptates molestias molestiae ex inventore sint a, placeat nulla? Illo non nam necessitatibus optio praesentium porro voluptas similique dicta tempora animi repudiandae voluptatem sunt distinctio corrupti consequuntur quos neque cumque quod, aperiam nobis reiciendis labore. Magni ab mollitia architecto corrupti voluptatum aut pariatur repellat nesciunt eaque accusamus aperiam tempore quam cumque ea sint, illo alias rem nemo praesentium molestias sit. Illo odit vitae necessitatibus soluta suscipit atque placeat quidem dolor cum. Optio tempora dolor illo quibusdam sunt totam, at incidunt, vel blanditiis tenetur saepe ex earum repellendus cum veritatis debitis corporis sapiente. Expedita ullam laborum reprehenderit totam ex culpa tenetur fugit aliquid aspernatur a fugiat consectetur, quas repudiandae! Saepe esse iste ullam ducimus aliquid molestiae atque cupiditate sequi vitae dolorum? Voluptate natus quae modi impedit in laboriosam id enim pariatur doloribus. Assumenda laudantium corporis quisquam natus sed deleniti ad ipsa, commodi reiciendis placeat officia sunt? Ab dolor enim consectetur voluptatum odit ipsum architecto libero? Ipsum non perspiciatis in error ullam? Repellendus ipsa dolores quos accusantium numquam, cumque officia, totam eum quaerat aut quibusdam? Fugit necessitatibus, debitis, qui ab reiciendis totam natus eius ex et voluptatum veritatis iure. Veniam exercitationem ab doloribus.</>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, aperiam saepe? Beatae laudantium, officiis, vero esse optio natus suscipit porro cupiditate sint nisi molestias earum ipsum voluptas dolor sunt fugit provident perferendis illo adipisci ipsa! Voluptatum, quis numquam ea repellat quisquam iusto quibusdam at neque quaerat porro consequatur incidunt enim nostrum doloremque consectetur illum doloribus modi eos totam vel repudiandae magni accusantium ullam? Nam cupiditate, laboriosam aliquid officiis voluptatum est! Repellendus deleniti aliquid animi fugiat molestiae magnam reprehenderit minima et, earum quam, saepe a architecto ex similique iste dicta minus possimus. Provident asperiores expedita delectus quo minus repudiandae voluptates ea, tenetur, fugiat debitis sunt blanditiis. Corrupti saepe quaerat ducimus doloribus provident sit veniam, consequuntur velit repudiandae molestiae voluptatum consequatur amet reprehenderit laudantium tempora, molestias fugiat assumenda officiis maiores deserunt! Itaque voluptates quae, magni velit provident dicta illo sequi possimus, voluptatibus recusandae tempora culpa nemo temporibus placeat dolore quis? Sint quam dolorem porro saepe quod neque veniam quisquam modi repudiandae fugit, rerum aspernatur mollitia magnam, voluptatem aut illo aliquid. Minus eum saepe a consectetur temporibus? Itaque animi officiis eius mollitia? Nulla officiis possimus illo molestias! Aut asperiores quod perspiciatis. Sint, facilis quasi eveniet in optio omnis voluptas explicabo impedit aliquid non. </>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere esse labore odio dolorum non, dolores cumque iure suscipit possimus nihil rerum error ullam amet optio dolor voluptatibus! Optio ullam molestias labore recusandae veritatis mollitia eos fugit. Molestiae vero laudantium illo, asperiores, unde harum quaerat alias sed, magnam eveniet repellat. Qui numquam itaque accusantium laudantium, nisi assumenda amet? Obcaecati, nisi praesentium quis, necessitatibus, est eaque laboriosam cumque temporibus eveniet animi dignissimos! Maiores tenetur dolores aliquid doloremque autem eius eos deleniti voluptates quibusdam, velit, dolorem fugiat voluptate sequi! Est, soluta doloremque amet necessitatibus praesentium rem quia dolorem repellat corrupti reiciendis ex, fugit cupiditate quo assumenda obcaecati deserunt distinctio reprehenderit commodi. Ipsam asperiores iusto sunt a suscipit! Suscipit repellat mollitia laborum, incidunt placeat voluptates reiciendis maiores nihil eius, magni, quos harum voluptatum fugit sit sequi ut labore blanditiis commodi repellendus dolorem dicta ducimus natus. Quos nobis numquam quasi dolorum blanditiis ipsam necessitatibus non vitae, ex eveniet earum nisi ullam nihil eos obcaecati repellendus sit nam deleniti pariatur ea harum. Doloremque non ad eligendi labore quas possimus autem delectus voluptates sapiente corrupti iure consequuntur cumque, architecto sint nobis commodi ducimus quo deleniti voluptate, aliquid quod! Eveniet alias minus culpa cupiditate soluta quo delectus!
                            </>
                        </CustomTabPanel>
                    </Box>
    </>
    )
}
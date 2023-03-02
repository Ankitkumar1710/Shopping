import React from "react";
import { Container, Image, Group, Text, Header, SimpleGrid, Card, Badge, Button, } from '@mantine/core';
import "./Search.css";
const Search = ({ value, onChangeData }) => {
  return (
    <>
    {/* <div> 
      <h2>Logo</h2>
    </div> */}
    {/* <div>
      <input
        className="search__input"
        type="text"
        placeholder="Enter product name"
        value={value}
        onChange={onChangeData}
      />
    </div> */}
    <Header fixed={true} height={60} py={12} sx={{ background: "black" }}>
				<Group  >
					<Group ml={40} sx={{ width: '15%' }}>
						<Image width={129} src="https://www.jebelz.com/media/logo/stores/1/jebelz-dubai.png" />
					</Group>
					<Group sx={{ width: '55%' }}>
            {/* <input style={{ width: "100%", height: '40px', }}
						type="text"
						placeholder="Search for products, brands and more" onChange={(e) => setSearchTitle(e.target.value)}>
              </input> */}
              <input
        style={{width:'100%', height:'40px'}}
        type="text"
        placeholder="Enter product name"
        value={value}
        onChange={onChangeData}
      />
              </Group>
					<Group position="right" sx={{ width: '20%' }}>
						<Text color='white' size={18} weight={500} pr={24}>Login</Text>
						<Text color='white' size={18} weight={500}>Cart</Text>
					</Group>
				</Group>
			</Header>
    </>
  );
};

export default Search;

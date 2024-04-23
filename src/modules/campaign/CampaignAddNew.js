import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { IconBannerCampAddNew, IconMoneyBag } from "components/icons";
import { Button } from "components/button";
import useOnChange from "hooks/useOnChange";
import { toast } from "react-toastify";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const { handleSubmit, control, setValue } = useForm({
    mode: "onChange",
  });
  const [content, setContent] = useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleAddNewCampaign = (values) => {
    console.log(values);
  };

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  const [countries, setCountries] = useState([]);
  // https://restcountries.com/v3.1/name/vietnam
  const [filterCountry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountries() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        // console.log(response);
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  return (
    <div className="rounded-xl bg-white py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label>Campaign Title *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option
                    onClick={() =>
                      handleSelectDropdownOption("category", "architecture")
                    }
                  >
                    Architecture
                  </Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Short Description *</Label>
            <Textarea
              control={control}
              name="short-desc"
              placeholder="Write a short description...."
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
            />
          </FormGroup>
          <div className="relative my-10 banner">
            <div className="flex items-center w-full py-8 font-bold text-white rounded-lg banner bg-secondary px-11 bg-opacity-80 gap-x-3">
              <IconMoneyBag></IconMoneyBag>
              <p>You will get 90% of total raised</p>
            </div>
            <div className="absolute top-0 right-0 -translate-x-[30%]">
              <IconBannerCampAddNew></IconBannerCampAddNew>
            </div>
          </div>
          <FormRow>
            <FormGroup>
              <Label>Goal *</Label>
              <Input
                control={control}
                name="goal"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Raised Amount *</Label>
              <Input
                control={control}
                name="amount"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Amount Prefilled</Label>
              <Input
                control={control}
                name="prefilled"
                placeholder="Amount Prefilled"
              ></Input>
              <p className="text-sm text-left text-text3">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Video</Label>
              <Input control={control} name="video" placeholder="Video"></Input>
              <p className="text-sm text-left text-text3">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Method 1</Dropdown.Option>
                  <Dropdown.Option>Method 2</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select country">
                  Country
                </Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="Search country"
                    onChange={setFilterCountry}
                  ></Dropdown.Search>
                  {countries.length > 0 &&
                    countries.map((country) => (
                      <Dropdown.Option
                        key={country?.name?.common}
                        onClick={() =>
                          handleSelectDropdownOption(
                            "country",
                            country?.name?.common
                          )
                        }
                      >
                        {country?.name?.common}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Start Date</Label>
              <Input
                control={control}
                name="start-date"
                placeholder="Start Date"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>End Date</Label>
              <Input
                control={control}
                name="end-date"
                placeholder="End Date"
              ></Input>
            </FormGroup>
          </FormRow>
          <div className="mt-10 text-center">
            <Button type="submit" className="px-10 mx-auto" kind="primary">
              Submit new campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;

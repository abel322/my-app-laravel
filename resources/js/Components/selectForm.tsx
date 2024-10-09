import {Select, SelectItem} from "@nextui-org/select";
import {users} from "@/api/data";
import {Avatar} from "@nextui-org/avatar";

export default function SelectForm() {
  return (
    <Select
      items={users}
      label="CLIENT"
      placeholder="Select a user"
      labelPlacement="outside"
      classNames={{
        base: "w-full mb-3",
        trigger: "h-12",
      }}
      renderValue={(items:any) => {
        return items.map((item:any) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item.data.name}
              className="flex-shrink-0"
              size="sm"
              src={item.data.avatar}
            />
            <div className="flex flex-col">
              <span>{item.data.name}</span>
              <span className="text-default-500 text-tiny">({item.data.email})</span>
            </div>
          </div>
        ));
      }}
    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span>
              <span className="text-tiny text-default-400">{user.email}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}

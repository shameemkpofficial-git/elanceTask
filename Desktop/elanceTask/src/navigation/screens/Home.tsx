import { Pressable, StyleSheet, Text, View } from "react-native";
import Separator from "../../components/Separator";
import ModuleCard from "../../components/moduleCard";
import TimelineCard from "../../components/TimelineCard";
import ExamSvg from "../../assets/svg/examSvg";
import ButtonWithIcon from "../../components/ButtonWithIcon";

export function Home() {
  return (
    <View style={styles.container}>
      <Separator height={32} />
      <ModuleCard 
        moduleNumber="03" 
        sectionTitle={"Section A: Commercial\nLaws"} 
      />
      <Separator height={24} />
      <TimelineCard
        stepNumber={1}
        title="Introduction to Law and Legal System in India"
        isCompleted={true}
        isActive={false}
        participants={[
          "https://avatar.iran.liara.run/public",
          "https://avatar.iran.liara.run/public/girl",
        ]}
      />

<Separator height={24} />
      <TimelineCard
        stepNumber={1}
        title="Introduction to Law and Legal System in India"
        isCompleted={false}
        isActive={false}
        participants={[
          "https://avatar.iran.liara.run/public",
          "https://avatar.iran.liara.run/public/girl",
        ]}
      />
      <Separator height={24} />
      <TimelineCard
        stepNumber={1}
        title="Introduction to Law and Legal System in India"
        isCompleted={false}
        isActive={true}
        participants={[
          "https://avatar.iran.liara.run/public",
          "https://avatar.iran.liara.run/public/girl",
        ]}
      />
      <Separator height={24} />
      <View style={{ paddingLeft: 49 }}>
        <ButtonWithIcon width={157} title={"Attend Exam"} />
      </View>

      <Separator height={40} />

      <ModuleCard 
        moduleNumber="04" 
        sectionTitle={"Section A: Commercial\nLaws"} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 25,
  },
  rowContainer: {
    flexDirection: "row",
    backgroundColor: "#0057C0CC",
    paddingVertical: 19,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    borderRadius: 12,
  },
  moduleContainer: {
    flexDirection: "row",
  },
  moduleNumber: {
    fontSize: 28,
    lineHeight: 34,
    color: "#fff",
    fontWeight: "400",
  },
  moduleText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#fff",
    fontWeight: "400",
    opacity: 0.5,
  },
  separatorLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#25252599",
  },
  sectionTitle: {
    fontSize: 17,
    lineHeight: 22,
    color: "#fff",
    fontWeight: "600",
  },
  menuContainer: {
    backgroundColor: "green",
  },
  menuText: {
    fontSize: 17,
    lineHeight: 22,
    color: "#fff",
    fontWeight: "600",
  },
});

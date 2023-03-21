import { Y as SvelteComponentDev, Z as init, $ as safe_not_equal, a0 as dispatch_dev, a1 as create_slot, a2 as validate_slots, a3 as base$1, a4 as tick, a5 as element, a6 as space, a7 as text, a8 as claim_element, a9 as children, aa as detach_dev, ab as claim_space, ac as claim_text, ad as attr_dev, ae as add_location, af as src_url_equal, ag as insert_hydration_dev, ah as append_hydration_dev, ai as update_slot_base, aj as get_all_dirty_from_scope, ak as get_slot_changes, al as set_data_dev, am as transition_in, an as transition_out, ao as binding_callbacks, ap as bind, aq as create_component, ar as claim_component, as as mount_component, at as destroy_component, au as add_flush_callback, av as noop, aw as bubble, ax as set_input_value, ay as listen_dev, az as run_all, aA as assign, aB as getContext, aC as get_spread_update, aD as get_spread_object, aE as to_number, aF as validate_each_argument, aG as validate_each_keys, aH as empty, aI as update_keyed_each, aJ as destroy_block, aK as logEvent, _ as __vitePreload, aL as createRouter, v as histoireConfig, aM as createWebHistory, aN as createWebHashHistory, aO as markRaw, K as reactive, d as defineComponent, r as ref, aP as watchEffect, o as openBlock, q as createBlock, aQ as mergeProps, aR as resolveDynamicComponent, h as createCommentVNode } from "./vendor-3ab3e533.js";
const ShipItem_svelte_svelte_type_style_lang = "";
const file$5 = "src/lib/components/ShipItem.svelte";
function create_fragment$b(ctx) {
  let div4;
  let div0;
  let t0;
  let div3;
  let div1;
  let t1;
  let t2;
  let img;
  let img_src_value;
  let t3;
  let div2;
  let t4;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  const block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      t0 = space();
      div3 = element("div");
      div1 = element("div");
      t1 = text(
        /*mass*/
        ctx[0]
      );
      t2 = space();
      img = element("img");
      t3 = space();
      div2 = element("div");
      t4 = text(
        /*cost*/
        ctx[1]
      );
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(
        div1_nodes,
        /*mass*/
        ctx[0]
      );
      t2 = claim_space(div1_nodes);
      img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t4 = claim_text(
        div2_nodes,
        /*cost*/
        ctx[1]
      );
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "s-Z06Qyz0SWBsp");
      add_location(div0, file$5, 1, 2, 26);
      if (!src_url_equal(img.src, img_src_value = base$1 + "/mass.svg"))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "mass");
      attr_dev(img, "class", "s-Z06Qyz0SWBsp");
      add_location(img, file$5, 5, 13, 124);
      attr_dev(div1, "class", "mass s-Z06Qyz0SWBsp");
      add_location(div1, file$5, 4, 4, 72);
      attr_dev(div2, "class", "cost s-Z06Qyz0SWBsp");
      add_location(div2, file$5, 7, 4, 180);
      attr_dev(div3, "class", "reqs s-Z06Qyz0SWBsp");
      add_location(div3, file$5, 3, 2, 49);
      attr_dev(div4, "class", "ship-item s-Z06Qyz0SWBsp");
      add_location(div4, file$5, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      append_hydration_dev(div4, t0);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, t1);
      append_hydration_dev(div1, t2);
      append_hydration_dev(div1, img);
      ctx[6](div1);
      append_hydration_dev(div3, t3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, t4);
      ctx[7](div2);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*mass*/
      1)
        set_data_dev(
          t1,
          /*mass*/
          ctx2[0]
        );
      if (!current || dirty & /*cost*/
      2)
        set_data_dev(
          t4,
          /*cost*/
          ctx2[1]
        );
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      if (default_slot)
        default_slot.d(detaching);
      ctx[6](null);
      ctx[7](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$b($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ShipItem", slots, ["default"]);
  let { mass } = $$props;
  let { cost } = $$props;
  let mass_el;
  let cost_el;
  const update_el = async (el) => {
    if (!el)
      return;
    el.classList.remove("updated");
    void el.offsetWidth;
    el.classList.add("updated");
  };
  $$self.$$.on_mount.push(function() {
    if (mass === void 0 && !("mass" in $$props || $$self.$$.bound[$$self.$$.props["mass"]])) {
      console.warn("<ShipItem> was created without expected prop 'mass'");
    }
    if (cost === void 0 && !("cost" in $$props || $$self.$$.bound[$$self.$$.props["cost"]])) {
      console.warn("<ShipItem> was created without expected prop 'cost'");
    }
  });
  const writable_props = ["mass", "cost"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ShipItem> was created with unknown prop '${key}'`);
  });
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      mass_el = $$value;
      $$invalidate(2, mass_el);
    });
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      cost_el = $$value;
      $$invalidate(3, cost_el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("mass" in $$props2)
      $$invalidate(0, mass = $$props2.mass);
    if ("cost" in $$props2)
      $$invalidate(1, cost = $$props2.cost);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    base: base$1,
    tick,
    mass,
    cost,
    mass_el,
    cost_el,
    update_el
  });
  $$self.$inject_state = ($$props2) => {
    if ("mass" in $$props2)
      $$invalidate(0, mass = $$props2.mass);
    if ("cost" in $$props2)
      $$invalidate(1, cost = $$props2.cost);
    if ("mass_el" in $$props2)
      $$invalidate(2, mass_el = $$props2.mass_el);
    if ("cost_el" in $$props2)
      $$invalidate(3, cost_el = $$props2.cost_el);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*mass_el, mass*/
    5) {
      update_el(mass_el);
    }
    if ($$self.$$.dirty & /*cost_el, cost*/
    10) {
      update_el(cost_el);
    }
  };
  return [mass, cost, mass_el, cost_el, $$scope, slots, div1_binding, div2_binding];
}
class ShipItem extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { mass: 0, cost: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ShipItem",
      options,
      id: create_fragment$b.name
    });
  }
  get mass() {
    throw new Error("<ShipItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set mass(value) {
    throw new Error("<ShipItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cost() {
    throw new Error("<ShipItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cost(value) {
    throw new Error("<ShipItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_1$2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Thingy");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thingy");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: "(2:2) <ShipItem {mass} {cost}>",
    ctx
  });
  return block;
}
function create_default_slot$7(ctx) {
  let shipitem;
  let current;
  shipitem = new ShipItem({
    props: {
      mass: (
        /*mass*/
        ctx[1]
      ),
      cost: (
        /*cost*/
        ctx[2]
      ),
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(shipitem.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(shipitem.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(shipitem, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const shipitem_changes = {};
      if (dirty & /*mass*/
      2)
        shipitem_changes.mass = /*mass*/
        ctx2[1];
      if (dirty & /*cost*/
      4)
        shipitem_changes.cost = /*cost*/
        ctx2[2];
      if (dirty & /*$$scope*/
      32) {
        shipitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      shipitem.$set(shipitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(shipitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(shipitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(shipitem, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$7.name,
    type: "slot",
    source: "(1:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_number0;
  let updating_value;
  let t;
  let hst_number1;
  let updating_value_1;
  let current;
  function hst_number0_value_binding(value) {
    ctx[3](value);
  }
  let hst_number0_props = { title: "Mass" };
  if (
    /*mass*/
    ctx[1] !== void 0
  ) {
    hst_number0_props.value = /*mass*/
    ctx[1];
  }
  hst_number0 = new /*Hst*/
  ctx[0].Number({ props: hst_number0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number0, "value", hst_number0_value_binding));
  function hst_number1_value_binding(value) {
    ctx[4](value);
  }
  let hst_number1_props = { title: "Cost" };
  if (
    /*cost*/
    ctx[2] !== void 0
  ) {
    hst_number1_props.value = /*cost*/
    ctx[2];
  }
  hst_number1 = new /*Hst*/
  ctx[0].Number({ props: hst_number1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number1, "value", hst_number1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_number0.$$.fragment);
      t = space();
      create_component(hst_number1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_number0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(hst_number1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_number0, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(hst_number1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_number0_changes = {};
      if (!updating_value && dirty & /*mass*/
      2) {
        updating_value = true;
        hst_number0_changes.value = /*mass*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_number0.$set(hst_number0_changes);
      const hst_number1_changes = {};
      if (!updating_value_1 && dirty & /*cost*/
      4) {
        updating_value_1 = true;
        hst_number1_changes.value = /*cost*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_number1.$set(hst_number1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_number0.$$.fragment, local);
      transition_in(hst_number1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_number0.$$.fragment, local);
      transition_out(hst_number1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_number0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_number1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(3:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$a(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot$7]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, cost, mass*/
      38) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ShipItem_story", slots, []);
  let { Hst } = $$props;
  let mass = 1;
  let cost = 3;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<ShipItem_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ShipItem_story> was created with unknown prop '${key}'`);
  });
  function hst_number0_value_binding(value) {
    mass = value;
    $$invalidate(1, mass);
  }
  function hst_number1_value_binding(value) {
    cost = value;
    $$invalidate(2, cost);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, ShipItem, mass, cost });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("mass" in $$props2)
      $$invalidate(1, mass = $$props2.mass);
    if ("cost" in $$props2)
      $$invalidate(2, cost = $$props2.cost);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, mass, cost, hst_number0_value_binding, hst_number1_value_binding];
}
class ShipItem_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ShipItem_story",
      options,
      id: create_fragment$a.name
    });
  }
  get Hst() {
    throw new Error("<ShipItem_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ShipItem_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const index_svelte_svelte_type_style_lang = "";
const file$4 = "src/lib/components/CostMass/index.svelte";
function create_fragment$9(ctx) {
  let div0;
  let t0;
  let img;
  let img_src_value;
  let t1;
  let div1;
  let t2;
  const block = {
    c: function create() {
      div0 = element("div");
      t0 = text(
        /*mass*/
        ctx[0]
      );
      img = element("img");
      t1 = space();
      div1 = element("div");
      t2 = text(
        /*cost*/
        ctx[1]
      );
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(
        div0_nodes,
        /*mass*/
        ctx[0]
      );
      img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(
        div1_nodes,
        /*cost*/
        ctx[1]
      );
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = base$1 + "/mass.svg"))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "mass");
      attr_dev(img, "class", "s-oaXyF42PwCjx");
      add_location(img, file$4, 0, 24, 24);
      attr_dev(div0, "class", "mass s-oaXyF42PwCjx");
      add_location(div0, file$4, 0, 0, 0);
      attr_dev(div1, "class", "cost s-oaXyF42PwCjx");
      add_location(div1, file$4, 1, 0, 71);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div0, anchor);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, img);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, t2);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*mass*/
      1)
        set_data_dev(
          t0,
          /*mass*/
          ctx2[0]
        );
      if (dirty & /*cost*/
      2)
        set_data_dev(
          t2,
          /*cost*/
          ctx2[1]
        );
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CostMass", slots, []);
  let { mass } = $$props;
  let { cost } = $$props;
  $$self.$$.on_mount.push(function() {
    if (mass === void 0 && !("mass" in $$props || $$self.$$.bound[$$self.$$.props["mass"]])) {
      console.warn("<CostMass> was created without expected prop 'mass'");
    }
    if (cost === void 0 && !("cost" in $$props || $$self.$$.bound[$$self.$$.props["cost"]])) {
      console.warn("<CostMass> was created without expected prop 'cost'");
    }
  });
  const writable_props = ["mass", "cost"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<CostMass> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("mass" in $$props2)
      $$invalidate(0, mass = $$props2.mass);
    if ("cost" in $$props2)
      $$invalidate(1, cost = $$props2.cost);
  };
  $$self.$capture_state = () => ({ base: base$1, mass, cost });
  $$self.$inject_state = ($$props2) => {
    if ("mass" in $$props2)
      $$invalidate(0, mass = $$props2.mass);
    if ("cost" in $$props2)
      $$invalidate(1, cost = $$props2.cost);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [mass, cost];
}
class CostMass extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { mass: 0, cost: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CostMass",
      options,
      id: create_fragment$9.name
    });
  }
  get mass() {
    throw new Error("<CostMass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set mass(value) {
    throw new Error("<CostMass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cost() {
    throw new Error("<CostMass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cost(value) {
    throw new Error("<CostMass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$6(ctx) {
  let costmass;
  let current;
  costmass = new CostMass({
    props: { mass: 12, cost: 21 },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(costmass.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(costmass.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(costmass, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(costmass.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(costmass.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(costmass, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$6.name,
    type: "slot",
    source: '(1:0) <Hst.Story title=\\"CostMass\\">',
    ctx
  });
  return block;
}
function create_fragment$8(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "CostMass",
      $$slots: { default: [create_default_slot$6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      2) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CostMass", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<CostMass> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<CostMass> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, CostMass });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class CostMass_1 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CostMass_1",
      options,
      id: create_fragment$8.name
    });
  }
  get Hst() {
    throw new Error("<CostMass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<CostMass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Section_svelte_svelte_type_style_lang = "";
const file$3 = "src/lib/components/Section.svelte";
function create_fragment$7(ctx) {
  let div;
  let h2;
  let t0;
  let t1;
  let hr;
  let t2;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  const block = {
    c: function create() {
      div = element("div");
      h2 = element("h2");
      t0 = text(
        /*label*/
        ctx[0]
      );
      t1 = space();
      hr = element("hr");
      t2 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(
        h2_nodes,
        /*label*/
        ctx[0]
      );
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      hr = claim_element(div_nodes, "HR", { class: true });
      div_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "s-8Wn_PeFn3mR4");
      add_location(h2, file$3, 1, 2, 8);
      attr_dev(hr, "class", "s-8Wn_PeFn3mR4");
      add_location(hr, file$3, 2, 2, 27);
      attr_dev(div, "class", "s-8Wn_PeFn3mR4");
      add_location(div, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, h2);
      append_hydration_dev(h2, t0);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, hr);
      insert_hydration_dev(target, t2, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (!current || dirty & /*label*/
      1)
        set_data_dev(
          t0,
          /*label*/
          ctx2[0]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (detaching)
        detach_dev(t2);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Section", slots, ["default"]);
  let { label } = $$props;
  $$self.$$.on_mount.push(function() {
    if (label === void 0 && !("label" in $$props || $$self.$$.bound[$$self.$$.props["label"]])) {
      console.warn("<Section> was created without expected prop 'label'");
    }
  });
  const writable_props = ["label"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Section> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2)
      $$invalidate(0, label = $$props2.label);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ label });
  $$self.$inject_state = ($$props2) => {
    if ("label" in $$props2)
      $$invalidate(0, label = $$props2.label);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [label, $$scope, slots];
}
class Section extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { label: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Section",
      options,
      id: create_fragment$7.name
    });
  }
  get label() {
    throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Field_svelte_svelte_type_style_lang = "";
const file$2 = "src/lib/components/Field.svelte";
function create_if_block(ctx) {
  let label_1;
  let t;
  const block = {
    c: function create() {
      label_1 = element("label");
      t = text(
        /*label*/
        ctx[1]
      );
      this.h();
    },
    l: function claim(nodes) {
      label_1 = claim_element(nodes, "LABEL", { class: true });
      var label_1_nodes = children(label_1);
      t = claim_text(
        label_1_nodes,
        /*label*/
        ctx[1]
      );
      label_1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(label_1, "class", "s-Q6iX6IPZr4w0");
      add_location(label_1, file$2, 2, 4, 24);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, label_1, anchor);
      append_hydration_dev(label_1, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*label*/
      2)
        set_data_dev(
          t,
          /*label*/
          ctx2[1]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(label_1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(2:2) {#if label}",
    ctx
  });
  return block;
}
function fallback_block(ctx) {
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      input = element("input");
      this.h();
    },
    l: function claim(nodes) {
      input = claim_element(nodes, "INPUT", { type: true, placeholder: true });
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "text");
      attr_dev(
        input,
        "placeholder",
        /*placeholder*/
        ctx[2]
      );
      add_location(input, file$2, 5, 4, 68);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, input, anchor);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[6]
          ),
          listen_dev(
            input,
            "change",
            /*change_handler*/
            ctx[5],
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*placeholder*/
      4) {
        attr_dev(
          input,
          "placeholder",
          /*placeholder*/
          ctx2[2]
        );
      }
      if (dirty & /*value*/
      1 && input.value !== /*value*/
      ctx2[0]) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(5:8)      ",
    ctx
  });
  return block;
}
function create_fragment$6(ctx) {
  let div;
  let t;
  let current;
  let if_block = (
    /*label*/
    ctx[1] && create_if_block(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t = claim_space(div_nodes);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "s-Q6iX6IPZr4w0");
      add_location(div, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_hydration_dev(div, t);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*label*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*placeholder, value*/
        5)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Field", slots, ["default"]);
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { placeholder = label } = $$props;
  const writable_props = ["label", "value", "placeholder"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Field> was created with unknown prop '${key}'`);
  });
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("placeholder" in $$props2)
      $$invalidate(2, placeholder = $$props2.placeholder);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ label, value, placeholder });
  $$self.$inject_state = ($$props2) => {
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("placeholder" in $$props2)
      $$invalidate(2, placeholder = $$props2.placeholder);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [value, label, placeholder, $$scope, slots, change_handler, input_input_handler];
}
class Field extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { label: 1, value: 0, placeholder: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Field",
      options,
      id: create_fragment$6.name
    });
  }
  get label() {
    throw new Error("<Field>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<Field>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Field>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Field>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get placeholder() {
    throw new Error("<Field>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set placeholder(value) {
    throw new Error("<Field>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Engine_svelte_svelte_type_style_lang = "";
const file$1 = "src/lib/components/ShipEdit/Propulsion/Engine.svelte";
function create_default_slot_1$1(ctx) {
  let t;
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      t = text("Well then!\n      ");
      input = element("input");
      this.h();
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Well then!\n      ");
      input = claim_element(nodes, "INPUT", {
        class: true,
        type: true,
        min: true,
        max: true,
        step: true
      });
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "class", "short s-6wUMfpp2c9lR");
      attr_dev(input, "type", "number");
      attr_dev(input, "min", "0");
      attr_dev(input, "max", "20");
      attr_dev(input, "step", "1");
      add_location(input, file$1, 4, 6, 86);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
      insert_hydration_dev(target, input, anchor);
      set_input_value(
        input,
        /*rating*/
        ctx[1]
      );
      if (!mounted) {
        dispose = listen_dev(
          input,
          "input",
          /*input_input_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*rating*/
      2 && to_number(input.value) !== /*rating*/
      ctx2[1]) {
        set_input_value(
          input,
          /*rating*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
      if (detaching)
        detach_dev(input);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(3:4) <Field label=\\"thrust rating\\">',
    ctx
  });
  return block;
}
function create_default_slot$5(ctx) {
  let div;
  let field;
  let t0;
  let label;
  let input;
  let t1;
  let current;
  let mounted;
  let dispose;
  field = new Field({
    props: {
      label: "thrust rating",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(field.$$.fragment);
      t0 = space();
      label = element("label");
      input = element("input");
      t1 = text(" advanced");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(field.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      label = claim_element(div_nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      input = claim_element(label_nodes, "INPUT", { type: true, class: true });
      t1 = claim_text(label_nodes, " advanced");
      label_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "checkbox");
      attr_dev(input, "class", "s-6wUMfpp2c9lR");
      add_location(input, file$1, 14, 11, 249);
      attr_dev(label, "class", "s-6wUMfpp2c9lR");
      add_location(label, file$1, 14, 4, 242);
      attr_dev(div, "class", "s-6wUMfpp2c9lR");
      add_location(div, file$1, 1, 2, 23);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(field, div, null);
      append_hydration_dev(div, t0);
      append_hydration_dev(div, label);
      append_hydration_dev(label, input);
      input.checked = /*advanced*/
      ctx[0];
      append_hydration_dev(label, t1);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          input,
          "change",
          /*input_change_handler*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      const field_changes = {};
      if (dirty & /*$$scope, rating*/
      66) {
        field_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field.$set(field_changes);
      if (dirty & /*advanced*/
      1) {
        input.checked = /*advanced*/
        ctx2[0];
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(field.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(field.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(field);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$5.name,
    type: "slot",
    source: "(1:0) <ShipItem {...reqs}>",
    ctx
  });
  return block;
}
function create_fragment$5(ctx) {
  let shipitem;
  let current;
  const shipitem_spread_levels = [
    /*reqs*/
    ctx[2]
  ];
  let shipitem_props = {
    $$slots: { default: [create_default_slot$5] },
    $$scope: { ctx }
  };
  for (let i = 0; i < shipitem_spread_levels.length; i += 1) {
    shipitem_props = assign(shipitem_props, shipitem_spread_levels[i]);
  }
  shipitem = new ShipItem({ props: shipitem_props, $$inline: true });
  const block = {
    c: function create() {
      create_component(shipitem.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(shipitem.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(shipitem, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const shipitem_changes = dirty & /*reqs*/
      4 ? get_spread_update(shipitem_spread_levels, [get_spread_object(
        /*reqs*/
        ctx2[2]
      )]) : {};
      if (dirty & /*$$scope, advanced, rating*/
      67) {
        shipitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      shipitem.$set(shipitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(shipitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(shipitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(shipitem, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Engine", slots, []);
  let { reqs = { cost: 0, mass: 0 } } = $$props;
  let { advanced = false } = $$props;
  let { rating = 0 } = $$props;
  let { api = getContext("api") } = $$props;
  const writable_props = ["reqs", "advanced", "rating", "api"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Engine> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    rating = to_number(this.value);
    $$invalidate(1, rating);
  }
  function input_change_handler() {
    advanced = this.checked;
    $$invalidate(0, advanced);
  }
  $$self.$$set = ($$props2) => {
    if ("reqs" in $$props2)
      $$invalidate(2, reqs = $$props2.reqs);
    if ("advanced" in $$props2)
      $$invalidate(0, advanced = $$props2.advanced);
    if ("rating" in $$props2)
      $$invalidate(1, rating = $$props2.rating);
    if ("api" in $$props2)
      $$invalidate(3, api = $$props2.api);
  };
  $$self.$capture_state = () => ({
    getContext,
    Field,
    ShipItem,
    reqs,
    advanced,
    rating,
    api
  });
  $$self.$inject_state = ($$props2) => {
    if ("reqs" in $$props2)
      $$invalidate(2, reqs = $$props2.reqs);
    if ("advanced" in $$props2)
      $$invalidate(0, advanced = $$props2.advanced);
    if ("rating" in $$props2)
      $$invalidate(1, rating = $$props2.rating);
    if ("api" in $$props2)
      $$invalidate(3, api = $$props2.api);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    var _a;
    if ($$self.$$.dirty & /*api, rating, advanced*/
    11) {
      (_a = api == null ? void 0 : api.dispatch) == null ? void 0 : _a.setEngine({ rating, advanced });
    }
  };
  return [advanced, rating, reqs, api, input_input_handler, input_change_handler];
}
class Engine extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { reqs: 2, advanced: 0, rating: 1, api: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Engine",
      options,
      id: create_fragment$5.name
    });
  }
  get reqs() {
    throw new Error("<Engine>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reqs(value) {
    throw new Error("<Engine>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get advanced() {
    throw new Error("<Engine>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set advanced(value) {
    throw new Error("<Engine>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rating() {
    throw new Error("<Engine>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rating(value) {
    throw new Error("<Engine>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get api() {
    throw new Error("<Engine>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set api(value) {
    throw new Error("<Engine>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Ftl_svelte_svelte_type_style_lang = "";
const file = "src/lib/components/ShipEdit/Propulsion/Ftl.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let label;
  let input;
  let t0;
  let t1_value = (
    /*t*/
    ctx[6] + ""
  );
  let t1;
  let t2;
  let mounted;
  let dispose;
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      label = element("label");
      input = element("input");
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l: function claim(nodes) {
      label = claim_element(nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      input = claim_element(label_nodes, "INPUT", { type: true });
      t0 = claim_space(label_nodes);
      t1 = claim_text(label_nodes, t1_value);
      t2 = claim_space(label_nodes);
      label_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "radio");
      input.__value = /*t*/
      ctx[6];
      input.value = input.__value;
      ctx[5][0].push(input);
      add_location(input, file, 4, 9, 98);
      attr_dev(label, "class", "s-bMEhkCgfZ263");
      add_location(label, file, 3, 6, 82);
      this.first = label;
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, label, anchor);
      append_hydration_dev(label, input);
      input.checked = input.__value === /*type*/
      ctx[0];
      append_hydration_dev(label, t0);
      append_hydration_dev(label, t1);
      append_hydration_dev(label, t2);
      if (!mounted) {
        dispose = listen_dev(
          input,
          "change",
          /*input_change_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*type*/
      1) {
        input.checked = input.__value === /*type*/
        ctx[0];
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(label);
      ctx[5][0].splice(
        /*$$binding_groups*/
        ctx[5][0].indexOf(input),
        1
      );
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(3:4) {#each types as t (t)}",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let each_value = (
    /*types*/
    ctx[2]
  );
  validate_each_argument(each_value);
  const get_key = (ctx2) => (
    /*t*/
    ctx2[6]
  );
  validate_each_keys(ctx, each_value, get_each_context, get_key);
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*types, type*/
      5) {
        each_value = /*types*/
        ctx2[2];
        validate_each_argument(each_value);
        validate_each_keys(ctx2, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, destroy_block, create_each_block, each_1_anchor, get_each_context);
      }
    },
    d: function destroy(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(2:2) <Field label=\\"FTL drive\\">',
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let field;
  let current;
  field = new Field({
    props: {
      label: "FTL drive",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(field.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(field.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(field, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const field_changes = {};
      if (dirty & /*$$scope, type*/
      513) {
        field_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field.$set(field_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(field.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(field.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(field, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: "(1:0) <ShipItem {...reqs}>",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let shipitem;
  let current;
  const shipitem_spread_levels = [
    /*reqs*/
    ctx[1]
  ];
  let shipitem_props = {
    $$slots: { default: [create_default_slot$4] },
    $$scope: { ctx }
  };
  for (let i = 0; i < shipitem_spread_levels.length; i += 1) {
    shipitem_props = assign(shipitem_props, shipitem_spread_levels[i]);
  }
  shipitem = new ShipItem({ props: shipitem_props, $$inline: true });
  const block = {
    c: function create() {
      create_component(shipitem.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(shipitem.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(shipitem, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const shipitem_changes = dirty & /*reqs*/
      2 ? get_spread_update(shipitem_spread_levels, [get_spread_object(
        /*reqs*/
        ctx2[1]
      )]) : {};
      if (dirty & /*$$scope, type*/
      513) {
        shipitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      shipitem.$set(shipitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(shipitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(shipitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(shipitem, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Ftl", slots, []);
  let { type = "none" } = $$props;
  let { reqs = { mass: 0, cost: 0 } } = $$props;
  let { api = getContext("api") } = $$props;
  const types = ["none", "standard", "advanced"];
  const writable_props = ["type", "reqs", "api"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Ftl> was created with unknown prop '${key}'`);
  });
  const $$binding_groups = [[]];
  function input_change_handler() {
    type = this.__value;
    $$invalidate(0, type);
  }
  $$self.$$set = ($$props2) => {
    if ("type" in $$props2)
      $$invalidate(0, type = $$props2.type);
    if ("reqs" in $$props2)
      $$invalidate(1, reqs = $$props2.reqs);
    if ("api" in $$props2)
      $$invalidate(3, api = $$props2.api);
  };
  $$self.$capture_state = () => ({
    getContext,
    ShipItem,
    Field,
    type,
    reqs,
    api,
    types
  });
  $$self.$inject_state = ($$props2) => {
    if ("type" in $$props2)
      $$invalidate(0, type = $$props2.type);
    if ("reqs" in $$props2)
      $$invalidate(1, reqs = $$props2.reqs);
    if ("api" in $$props2)
      $$invalidate(3, api = $$props2.api);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*api, type*/
    9) {
      api == null ? void 0 : api.dispatch.setFtl(type);
    }
  };
  return [type, reqs, types, api, input_change_handler, $$binding_groups];
}
class Ftl extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { type: 0, reqs: 1, api: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Ftl",
      options,
      id: create_fragment$4.name
    });
  }
  get type() {
    throw new Error("<Ftl>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set type(value) {
    throw new Error("<Ftl>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get reqs() {
    throw new Error("<Ftl>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set reqs(value) {
    throw new Error("<Ftl>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get api() {
    throw new Error("<Ftl>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set api(value) {
    throw new Error("<Ftl>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$3(ctx) {
  let drive;
  let t;
  let ftl;
  let current;
  const drive_spread_levels = [
    /*propulsion*/
    ctx[0].drive
  ];
  let drive_props = {};
  for (let i = 0; i < drive_spread_levels.length; i += 1) {
    drive_props = assign(drive_props, drive_spread_levels[i]);
  }
  drive = new Engine({ props: drive_props, $$inline: true });
  const ftl_spread_levels = [
    /*propulsion*/
    ctx[0].ftl
  ];
  let ftl_props = {};
  for (let i = 0; i < ftl_spread_levels.length; i += 1) {
    ftl_props = assign(ftl_props, ftl_spread_levels[i]);
  }
  ftl = new Ftl({ props: ftl_props, $$inline: true });
  const block = {
    c: function create() {
      create_component(drive.$$.fragment);
      t = space();
      create_component(ftl.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(drive.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(ftl.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(drive, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(ftl, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const drive_changes = dirty & /*propulsion*/
      1 ? get_spread_update(drive_spread_levels, [get_spread_object(
        /*propulsion*/
        ctx2[0].drive
      )]) : {};
      drive.$set(drive_changes);
      const ftl_changes = dirty & /*propulsion*/
      1 ? get_spread_update(ftl_spread_levels, [get_spread_object(
        /*propulsion*/
        ctx2[0].ftl
      )]) : {};
      ftl.$set(ftl_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(drive.$$.fragment, local);
      transition_in(ftl.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(drive.$$.fragment, local);
      transition_out(ftl.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(drive, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(ftl, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: '(1:0) <Section label=\\"propulsion\\">',
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let section;
  let current;
  section = new Section({
    props: {
      label: "propulsion",
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(section.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(section.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(section, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const section_changes = {};
      if (dirty & /*$$scope, propulsion*/
      3) {
        section_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section.$set(section_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(section.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(section.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(section, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Propulsion", slots, []);
  let { propulsion = { drive: {}, ftl: {} } } = $$props;
  const writable_props = ["propulsion"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Propulsion> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("propulsion" in $$props2)
      $$invalidate(0, propulsion = $$props2.propulsion);
  };
  $$self.$capture_state = () => ({ Section, Drive: Engine, Ftl, propulsion });
  $$self.$inject_state = ($$props2) => {
    if ("propulsion" in $$props2)
      $$invalidate(0, propulsion = $$props2.propulsion);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [propulsion];
}
class Propulsion extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { propulsion: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Propulsion",
      options,
      id: create_fragment$3.name
    });
  }
  get propulsion() {
    throw new Error("<Propulsion>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set propulsion(value) {
    throw new Error("<Propulsion>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot$2(ctx) {
  let propulsion;
  let current;
  propulsion = new Propulsion({ $$inline: true });
  const block = {
    c: function create() {
      create_component(propulsion.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(propulsion.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(propulsion, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(propulsion.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(propulsion.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(propulsion, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(1:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      2) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Propulsion_story", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Propulsion_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Propulsion_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, Propulsion });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class Propulsion_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Propulsion_story",
      options,
      id: create_fragment$2.name
    });
  }
  get Hst() {
    throw new Error("<Propulsion_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Propulsion_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const GlobalStyle_svelte_svelte_type_style_lang = "";
function create_default_slot$1(ctx) {
  let engine;
  let current;
  engine = new Engine({
    props: { api: (
      /*api*/
      ctx[1]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(engine.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(engine.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(engine, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(engine.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(engine.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(engine, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: '(1:0) <Hst.Story title=\\"ShipEdit/Propulsion/Engine\\">',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "ShipEdit/Propulsion/Engine",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Engine_story", slots, []);
  let { Hst } = $$props;
  const api = {
    dispatch: {
      setEngine: (engine) => logEvent("setEngine", { engine })
    }
  };
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Engine_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Engine_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, logEvent, api, Engine });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, api];
}
class Engine_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Engine_story",
      options,
      id: create_fragment$1.name
    });
  }
  get Hst() {
    throw new Error("<Engine_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Engine_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot(ctx) {
  let ftl;
  let current;
  ftl = new Ftl({
    props: { api: (
      /*api*/
      ctx[1]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(ftl.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(ftl.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(ftl, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(ftl.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(ftl.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(ftl, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(1:0) <Hst.Story title=\\"ShipEdit/Propulsion/Ftl\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "ShipEdit/Propulsion/Ftl",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Ftl_story", slots, []);
  let { Hst } = $$props;
  const api = {
    dispatch: {
      setFtl: (ftl) => logEvent("setFtl", { ftl })
    }
  };
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Ftl_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Ftl_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, logEvent, api, Ftl });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, api];
}
class Ftl_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Ftl_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<Ftl_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Ftl_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-lib-components-shipitem-story-svelte", "path": ["ShipItem"], "filePath": "src/lib/components/ShipItem.story.svelte", "story": { "id": "src-lib-components-shipitem-story-svelte", "title": "ShipItem", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 0, component: ShipItem_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-shipitem-story-svelte-ec4622fc.js"), true ? [] : void 0) },
  { "id": "src-lib-components-costmass-index-story-svelte", "path": ["CostMass"], "filePath": "src/lib/components/CostMass/index.story.svelte", "story": { "id": "src-lib-components-costmass-index-story-svelte", "title": "CostMass", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 1, component: CostMass_1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-costmass-index-story-svelte-fa9c29ac.js"), true ? [] : void 0) },
  { "id": "src-lib-components-shipedit-propulsion-story-svelte", "path": ["Propulsion"], "filePath": "src/lib/components/ShipEdit/Propulsion.story.svelte", "story": { "id": "src-lib-components-shipedit-propulsion-story-svelte", "title": "Propulsion", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 2, component: Propulsion_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-shipedit-propulsion-story-svelte-eabfe58a.js"), true ? [] : void 0) },
  { "id": "src-lib-components-shipedit-propulsion-engine-story-svelte", "path": ["ShipEdit", "Propulsion", "Engine"], "filePath": "src/lib/components/ShipEdit/Propulsion/Engine.story.svelte", "story": { "id": "src-lib-components-shipedit-propulsion-engine-story-svelte", "title": "Engine", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 3, component: Engine_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-shipedit-propulsion-engine-story-svelte-42e8b729.js"), true ? [] : void 0) },
  { "id": "src-lib-components-shipedit-propulsion-ftl-story-svelte", "path": ["ShipEdit", "Propulsion", "Ftl"], "filePath": "src/lib/components/ShipEdit/Propulsion/Ftl.story.svelte", "story": { "id": "src-lib-components-shipedit-propulsion-ftl-story-svelte", "title": "Ftl", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 4, component: Ftl_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-shipedit-propulsion-ftl-story-svelte-df90933e.js"), true ? [] : void 0) }
];
let tree = [{ "title": "CostMass", "index": 1 }, { "title": "Propulsion", "index": 2 }, { "title": "ShipEdit", "children": [{ "title": "Propulsion", "children": [{ "title": "Engine", "index": 3 }, { "title": "Ftl", "index": 4 }] }] }, { "title": "ShipItem", "index": 0 }];
const base = "/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-2db017c5.js"), true ? ["assets/HomeView.vue-2db017c5.js","assets/vendor-3ab3e533.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-e7ab65e8.js"), true ? ["assets/StoryView.vue-e7ab65e8.js","assets/vendor-3ab3e533.js","assets/story-804dabc9.js","assets/MobileOverlay.vue2-a3503848.js","assets/BaseEmpty.vue-045cbb89.js","assets/state-4b1a79d2.js","assets/events-ae5cec59.js"] : void 0)
    }
  ]
});
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-3ab3e533.js").then((n) => n.bl), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-3ab3e533.js").then((n) => n.bm), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  base as b,
  clientSupportPlugins as c,
  files as f,
  mapFile as m,
  router as r,
  tree as t
};
